import { FeedContainer } from './Feed.style'
import FeedList from './FeedList'
import FeedPagination from './FeedPagination'
import FeedRanking from './FeedRanking'
import FeedRemote from './FeedRemote'
import LoadingLogo from '../../Common/Loading/LoadingLogo'
import { RootState } from '../../../store/store'
import { toast } from 'react-toastify'
import useGetFeedData from '../../../react-query/CommunityData/FeedData'
import useGetHitFeed from '../../../react-query/CommunityData/HitFeedData'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Feed = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()
    const { data, isLoading } = useGetFeedData(currentPage)
    const hitData = useGetHitFeed().data

    let rankingNum = 1;
    const hitDataList = hitData?.data?.top5Contents?.map((obj) => ({
        ...obj, rankingNum: rankingNum++
    }))

    const clickWrite = () => {
        if (accessToken) router.push('/community/write')
        else toast.error('로그인이 필요합니다!')
    }

    return (
        <>
            {!isLoading ? <FeedContainer>
                <FeedRanking hit={hitDataList} />
                <FeedList feedPost={data} />
                <FeedRemote clickWrite={clickWrite} />
                <FeedPagination currentPage={currentPage} setCurrentPage={setCurrentPage} maxPage={data?.data?.contents?.totalPage} />
            </FeedContainer> : <LoadingLogo />}
        </>

    )
}

export default Feed
