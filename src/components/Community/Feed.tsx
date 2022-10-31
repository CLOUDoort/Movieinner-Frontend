import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FeedContainer, FeedRemote } from './Feed.style'
import FeedList from './FeedList'
import FeedRanking from './FeedRanking'
import { BsPencilFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import Loading from '../Loading'
import FeedNavigation from './FeedNavigation'
import useGetFeedData from '../react-query/FeedData'

const Feed = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const { page } = router.query
    const [pageValue, setPageValue] = useState(1)
    const { data, isLoading } = useGetFeedData(page ? page : 1)

    console.log('feedPost', data)

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
            {page && !isLoading ? (
                <FeedContainer>
                    <FeedRanking />
                    <FeedList feedPost={data} />
                    <FeedRemote>
                        <BsPencilFill onClick={clickWrite} size={50}></BsPencilFill>
                        <AiOutlineSearch size={50}></AiOutlineSearch>
                    </FeedRemote>
                    <FeedNavigation totalPage={data} page={pageValue} handleChange={handlePaginationChange} />
                </FeedContainer>
            ) : (
                <Loading />
            )}
        </>
    )
}

export default Feed
