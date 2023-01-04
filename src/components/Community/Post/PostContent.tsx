import { GiHamburgerMenu } from 'react-icons/gi'
import { PostContentArea, PostContents, PostInfo } from './Post.style'

const PostContent = (props) => {
    const { data, clickModify } = props
    return (
        <PostContentArea>
            <PostInfo>
                <div>제목 : {data.title}</div>
                <div>
                    <div>{data.nickname}</div>
                    <div>{data.created_at}</div>
                    <GiHamburgerMenu size={30} onClick={clickModify} />
                </div>
            </PostInfo>
            <hr />
            <PostContents>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </PostContents>
        </PostContentArea>
    )
}

export default PostContent
