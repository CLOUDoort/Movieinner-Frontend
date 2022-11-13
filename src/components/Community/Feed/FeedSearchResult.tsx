import { stat } from 'fs'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { RootState } from '../../../store/store'
import Loading from '../../Loading'
import useGetFeedSearchData from '../../react-query/FeedSearchData'
import useGetHitFeed from '../../react-query/HitFeedData'
import { FeedContainer } from './Feed.style'
import FeedNavigation from './FeedNavigation'
import FeedRanking from './FeedRanking'
import FeedRemote from './FeedRemote'

const FeedSearchResult = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const { page } = router.query
    const hitData = useGetHitFeed().data
    // const { data, isLoading } = useGetFeedSearchData(page ? page : 1)
    const hitLoading = useGetHitFeed().isLoading
    const [pageValue, setPageValue] = useState(1)

    console.log('hit', hitData?.data?.top5Contents)
    const clickWrite = () => {
        if (accessToken) {
            router.push('/community/write')
        } else {
            toast.error('로그인이 필요합니다!')
        }
    }
    const handlePaginationChange = (value) => {
        try {
            setPageValue(value)
            router.push(`/community/feed/search/${value}`, undefined, { shallow: true })
        } catch (e) {
            console.error(e.response)
        }
    }

    return (
        <>
            {page ? (
                <FeedContainer>
                    <FeedRanking hit={hitData?.data?.top5Contents} />
                    <FeedRemote clickWrite={clickWrite} />
                    <FeedNavigation totalPage={1} page={1} handleChange={handlePaginationChange} />
                </FeedContainer>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default FeedSearchResult
