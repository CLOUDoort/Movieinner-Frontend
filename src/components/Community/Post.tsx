import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { apiInstance } from '../../apis/setting'
import { PostContainer, PostContentArea, PostInfo, PostContents, PostCommentArea, PostCommentWrite, PostCommentList } from './Post.style'

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
    const [content, setContent] = useState('')
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

    return (
        <PostContainer>
            <PostContentArea>
                <PostInfo>
                    <div>{post.nickname}</div>
                    <div>date</div>
                </PostInfo>
                <PostContents>
                    <div>title : {post.title}</div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </PostContents>
            </PostContentArea>
            <PostCommentArea>
                <PostCommentWrite></PostCommentWrite>
                <PostCommentList></PostCommentList>
            </PostCommentArea>
        </PostContainer>
    )
}

export default Post
