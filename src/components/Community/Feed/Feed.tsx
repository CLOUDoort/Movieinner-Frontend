import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FeedContainer } from './Feed.style'
import FeedList from './FeedList'
import FeedRanking from './FeedRanking'
import { useState } from 'react'
import FeedNavigation from './FeedNavigation'
import FeedRemote from './FeedRemote'
import LoadingLogo from '../../Common/Loading/LoadingLogo'
import useGetFeedData from '../../../apis/CommunityData/FeedData'
import useGetHitFeed from '../../../apis/CommunityData/HitFeedData'

const Feed = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const { page } = router.query
    const [pageValue, setPageValue] = useState(1)
    const { data, isLoading } = useGetFeedData(page ? page : 1)
    const hitData = useGetHitFeed().data
    const hitLoading = useGetHitFeed().isLoading

    let rankingNum = 1;
    const hitDataList = hitData?.data?.top5Contents?.map((obj) => ({
        ...obj, rankingNum: rankingNum++
    }))

    const clickWrite = () => {
        if (accessToken) {
            router.push('/community/write')
        } else {
            toast.error('로그인이 필요합니다!')
        }
    }

    const handlePaginationChange = (e, value) => {
        try {
            setPageValue(value)
            router.push(`/community/feed/${value}`, undefined, { shallow: true })
            console.info('page', pageValue)
        } catch (e) {
            console.error(e.response)
        }
    }

    return (
        <>
            {page && !isLoading && !hitLoading && hitDataList ? (
                <FeedContainer>
                    <FeedRanking hit={hitDataList} />
                    <FeedList feedPost={data} />
                    <FeedRemote clickWrite={clickWrite} />
                    <FeedNavigation totalPage={data?.data?.contents?.totalPage} page={pageValue} handleChange={handlePaginationChange} />
                </FeedContainer>
            ) : (
                <LoadingLogo />
            )}
        </>
    )
}

export default Feed
