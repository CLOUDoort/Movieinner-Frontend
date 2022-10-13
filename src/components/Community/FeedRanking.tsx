import { RankingArea, RankingSubtitle } from './Feed.style'

const FeedRanking = (props) => {
    const { feedPost } = props
    return (
        <RankingArea>
            <RankingSubtitle>인기 게시글</RankingSubtitle>
        </RankingArea>
    )
}

export default FeedRanking
