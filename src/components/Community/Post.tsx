import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { apiInstance } from '../../apis/setting'
import { PostContainer, PostContentArea, PostInfo, PostContents, PostCommentArea, PostCommentWrite, PostCommentList } from './Post.style'
import { AiOutlineMore } from 'react-icons/ai'
import PostModifyModal from './PostModifyModal'

interface ContentData {
    nickname?: string
    title?: string
    content?: string
    file?: string
}

const Post = () => {
    const router = useRouter()
    const { idx } = router.query
    const [post, setPost] = useState<ContentData>({})
    const [showModal, setShowModal] = useState(false)
    console.log('idx', idx)

    useEffect(() => {
        const getPost = async () => {
            try {
                if (!router.isReady) return
                const postResponse = await apiInstance.get(`/community/${idx}`)
                const post = postResponse.data.content
                setPost(post)
                // const matterResult = matter
            } catch (e) {
                console.error(e.response)
            }
        }
        getPost()
    }, [idx])

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <PostContainer>
            <PostContentArea>
                <PostInfo>
                    <div>{post.nickname}</div>
                    <div>
                        <div>date</div>
                        <AiOutlineMore size={30} onClick={openModal} />
                    </div>
                </PostInfo>
                <PostContents>
                    <div>{post.title}</div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </PostContents>
            </PostContentArea>
            <PostCommentArea>
                <PostCommentWrite></PostCommentWrite>
                <PostCommentList></PostCommentList>
            </PostCommentArea>
            {showModal ? <PostModifyModal /> : null}
        </PostContainer>
    )
}

export default Post
