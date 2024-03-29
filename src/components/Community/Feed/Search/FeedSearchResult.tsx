import { FeedContainer } from '../Feed.style'
import FeedPagination from '../FeedPagination'
import FeedRemote from '../FeedRemote'
import FeedSearchList from './FeedSearchList'
import LoadingLogo from '../../../Common/Loading/LoadingLogo'
import { RootState } from '../../../../store/store'
import { toast } from 'react-toastify'
import useGetFeedSearchData from '../../../../react-query/CommunityData/FeedSearchData'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const FeedSearchResult = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const { type, search } = router.query
    const [currentPage, setPageValue] = useState(1)
    const { data, isLoading } = useGetFeedSearchData(type, search, currentPage)
    const clickWrite = () => {
        if (accessToken) router.push('/community/write')
        else toast.error('로그인이 필요합니다!')
    }

    return (
        <>
            {!isLoading ? <FeedContainer>
                <p>검색 : {search}</p>
                <FeedSearchList searchList={data?.data.searchResult.responseContents} />
                <FeedRemote clickWrite={clickWrite} />
                <FeedPagination currentPage={currentPage} setCurrentPage={setPageValue} maxPage={data?.data?.searchResult?.totalPage} />
            </FeedContainer> : <LoadingLogo />}
        </>
    )
}

export default FeedSearchResult
