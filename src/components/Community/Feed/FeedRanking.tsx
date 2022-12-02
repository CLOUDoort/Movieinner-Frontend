import { useRouter } from 'next/router'
import { RankingList, RankingArea, RankingSubtitle } from './FeedRanking.style'

const FeedRanking = (props) => {
    const { hit } = props
    const router = useRouter()

    // number랑 조회수 필요

    return (
        <RankingArea>
            <RankingSubtitle>인기 게시글</RankingSubtitle>
            {hit.map((obj: any) => (
                <RankingList key={obj.idx}>
                    <li>
                        <span>{obj.rankingNum}: </span>
                        <span onClick={() => router.push(`/community/post/${obj.idx}`)}>{obj.title}</span>
                        <span>{obj.created_at}</span>
                    </li>
                </RankingList>
            ))}
        </RankingArea>
    )
}

export default FeedRanking
