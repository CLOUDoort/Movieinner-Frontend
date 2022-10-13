import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { apiInstance } from '../../apis/setting'

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
    console.log('idx', idx)

    useEffect(() => {
        const getPost = async () => {
            try {
                if (!router.isReady) return
                const postResponse = await apiInstance.get(`/community/${idx}`)
                const post = postResponse.data.content
                console.log(post)
                setPost(post)
            } catch (e) {
                console.error(e.response)
            }
        }
        getPost()
    }, [idx])
    return (
        <div>
            <div>nickname : {post.nickname}</div>
            <div>file : {post.file}</div>
            <div>title : {post.title}</div>
            <div>content : {post.content}</div>
        </div>
    )
}

export default Post
