import { FeedListArea, FeedListContainer, FeedListFirstType, FeedListLastType } from './Feed.style'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const FeedPost = (props) => {
    const { feedPost } = props
    useEffect(() => {}, [])

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
            {feedPost.map((obj: any) => (
                <FeedListContainer key={obj.idx}>
                    <FeedListFirstType>
                        <div>{obj.number}</div>
                        <div>
                            <Link href={`/community/post/${obj.idx}`}>{obj.title}</Link>
                        </div>
                    </FeedListFirstType>
                    <FeedListLastType>
                        <div>{obj.nickname}</div>
                        <div>date</div>
                        <div>조회수</div>
                    </FeedListLastType>
                </FeedListContainer>
            ))}
        </FeedListArea>
    )
}

export default FeedPost
