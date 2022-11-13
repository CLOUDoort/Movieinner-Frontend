import { FeedListArea, FeedListContainer, FeedListFirstType, FeedListLastType } from './Feed.style'
import Link from 'next/link'

const FeedList = (props) => {
    const { feedPost } = props
    console.log('feed', feedPost)

    return (
        <FeedListArea>
            <FeedListContainer>
                <FeedListFirstType>
                    <div>번호</div>
                    <div>제목</div>
                </FeedListFirstType>
                <FeedListLastType>
                    <div>작성자</div>
                    <div>날짜</div>
                    <div>조회수</div>
                </FeedListLastType>
            </FeedListContainer>
            <hr />
            {feedPost?.data?.contents.responseContents.map((obj: any) => (
                <FeedListContainer key={obj.idx}>
                    <FeedListFirstType>
                        <div>{obj.number}</div>
                        <div>
                            <Link href={`/community/post/${obj.idx}`}>{obj.title}</Link>
                        </div>
                    </FeedListFirstType>
                    <FeedListLastType>
                        <div>{obj.nickname}</div>
                        <div>{obj.created_at}</div>
                        <div>{obj.hit}</div>
                    </FeedListLastType>
                </FeedListContainer>
            ))}
        </FeedListArea>
    )
}

export default FeedList
