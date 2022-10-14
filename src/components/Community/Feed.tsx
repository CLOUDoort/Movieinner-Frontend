import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FeedContainer, FeedRemote } from './Feed.style'
import FeedList from './FeedList'
import FeedRanking from './FeedRanking'
import { BsPencilFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { apiInstance } from '../../apis/setting'

const Feed = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1)
    const { page } = router.query
    const [feedPost, setFeedPost] = useState([])
    console.log('page', page)

    useEffect(() => {
        const getFeed = async () => {
            try {
                const postResponse = await apiInstance.get(`/community/page/${currentPage}`)
                const postList = postResponse.data.contents.responseContents
                console.log('post', postResponse.data)
                setFeedPost(postList)
            } catch (e) {
                console.error(e.response)
            }
        }
        getFeed()
    }, [currentPage])

    const clickWrite = () => {
        if (accessToken) {
            router.push('/community/write')
        } else {
            toast.error('로그인이 필요합니다!')
        }
    }

    return (
        <FeedContainer>
            <FeedRanking />
            <FeedList feedPost={feedPost} />
            <FeedRemote>
                <BsPencilFill onClick={clickWrite} size={50}></BsPencilFill>
                <AiOutlineSearch size={50}></AiOutlineSearch>
            </FeedRemote>
        </FeedContainer>
    )
}

export default Feed
