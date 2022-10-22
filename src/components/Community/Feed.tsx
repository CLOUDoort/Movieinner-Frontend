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
import Loading from '../Loading'
import FeedNavigation from './FeedNavigation'
import { useQuery } from 'react-query'

const Feed = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const { page } = router.query
    const [feedPost, setFeedPost] = useState([])
    const [totalPage, setTotalPage] = useState(0)
    const { data } = useQuery('characters', async () => await apiInstance.get(`/community/page/${page}`).then((result: any) => setFeedPost(result)))

    useEffect(() => {
        const getFeed = async () => {
            try {
                if (!router.isReady) return
                const postResponse = await apiInstance.get(`/community/page/${page}`)
                const postList = postResponse.data.contents.responseContents
                const total = postResponse.data.contents.totalPage
                console.log('total', total)
                console.log('post', postResponse.data)
                setTotalPage(total)
                setFeedPost(postList)
            } catch (e) {
                console.error(e.response)
            }
        }
        getFeed()
    }, [page, router.isReady])

    const clickWrite = () => {
        if (accessToken) {
            router.push('/community/write')
        } else {
            toast.error('로그인이 필요합니다!')
        }
    }

    return (
        <>
            {page ? (
                <FeedContainer>
                    <FeedRanking />
                    <FeedList feedPost={feedPost} />
                    <FeedRemote>
                        <BsPencilFill onClick={clickWrite} size={50}></BsPencilFill>
                        <AiOutlineSearch size={50}></AiOutlineSearch>
                    </FeedRemote>
                    <FeedNavigation totalPage={totalPage} />
                </FeedContainer>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Feed
