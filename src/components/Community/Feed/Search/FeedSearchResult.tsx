import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { RootState } from '../../../../store/store'
import Loading from '../../../Loading'
import useGetFeedSearchData from '../../../react-query/FeedSearchData'
import useGetHitFeed from '../../../react-query/HitFeedData'
import { FeedContainer } from '../Feed.style'
import FeedNavigation from '../FeedNavigation'
import FeedRanking from '../FeedRanking'
import FeedRemote from '../FeedRemote'
import FeedSearchList from './FeedSearchList'

const FeedSearchResult = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const [menu, search, page] = router.query.slug
    console.log('page', page)
    const hitData = useGetHitFeed().data
    const { data } = useGetFeedSearchData(menu, search, page)
    console.log('data', data?.data?.searchResult)
    const [pageValue, setPageValue] = useState(1)

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
            router.push(`/community/feed/search/${menu}/${search}/${value}`, undefined, { shallow: true })
        } catch (e) {
            console.error(e.response)
        }
    }

    return (
        <>
            {data ? (
                <FeedContainer>
                    <>
                        <FeedRanking hit={hitData?.data?.top5Contents} />
                        <FeedSearchList searchList={data?.data.searchResult.responseContents} />
                        <FeedRemote clickWrite={clickWrite} />
                        <FeedNavigation totalPage={data?.data.searchResult.totalPage} page={pageValue} handleChange={handlePaginationChange} />
                    </>
                </FeedContainer>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default FeedSearchResult
