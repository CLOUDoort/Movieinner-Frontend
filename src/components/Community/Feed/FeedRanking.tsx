import { RankingArea, RankingSubtitle } from './Feed.style'

const FeedRanking = (props) => {
    const { hit } = props

    return (
        <RankingArea>
            <RankingSubtitle>인기 게시글</RankingSubtitle>
            <div>
                {hit.map((obj: any) => (
                    <div key={obj.idx}>
                        <div>
                            <div>{obj.title}</div>
                            <div>{obj.created_at}</div>
                        </div>
                    </div>
                ))}
            </div>
        </RankingArea>
    )
}

export default FeedRanking
