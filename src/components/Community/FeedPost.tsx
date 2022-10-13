import { PostArea, PostContainer, PostFirstPart, PostSecondPart } from './Feed.style'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const FeedPost = (props) => {
    const { feedPost } = props
    const [index, setIndex] = useState(0)

    useEffect(() => {}, [])

    return (
        <PostArea>
            <PostContainer>
                <PostFirstPart>
                    <div>번호</div>
                    <div>제목</div>
                </PostFirstPart>
                <PostSecondPart>
                    <div>작성자</div>
                    <div>날짜</div>
                    <div>조회수</div>
                </PostSecondPart>
            </PostContainer>
            <hr />
            {feedPost.map((obj) => (
                <PostContainer key={obj.idx}>
                    <PostFirstPart>
                        <div>1</div>
                        <div>
                            <Link href={`/community/post/${obj.idx}`}>{obj.title}</Link>
                        </div>
                    </PostFirstPart>
                    <PostSecondPart>
                        <div>{obj.nickname}</div>
                        <div>date</div>
                        <div>조회수</div>
                    </PostSecondPart>
                </PostContainer>
            ))}
        </PostArea>
    )
}

export default FeedPost
