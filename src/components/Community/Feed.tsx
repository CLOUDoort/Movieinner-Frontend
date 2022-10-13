import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FeedContainer, FeedRemote } from './Feed.style'
import FeedPost from './FeedPost'
import FeedRanking from './FeedRanking'
import { BsPencilFill } from 'react-icons/bs'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'

const Feed = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(0)
    const { page } = router.query
    console.log('page', page)

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
            <FeedPost />
            <FeedRemote>
                <BsPencilFill onClick={clickWrite} size={50}></BsPencilFill>
                <AiOutlineSearch size={50}></AiOutlineSearch>
            </FeedRemote>
        </FeedContainer>
    )
}

export default Feed
