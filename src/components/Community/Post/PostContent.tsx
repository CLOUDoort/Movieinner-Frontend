import { AiOutlineMore } from 'react-icons/ai'
import { PostContentArea, PostContents, PostInfo } from './Post.style'

const PostContent = (props) => {
    const { data, clickModify } = props
    return (
        <PostContentArea>
            <PostInfo>
                <div>{data.nickname}</div>
                <div>
                    <div>{data.created_at}</div>
                    <AiOutlineMore size={30} onClick={clickModify} />
                </div>
            </PostInfo>
            <PostContents>
                <div>{data.title}</div>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
            </PostContents>
        </PostContentArea>
    )
}

export default PostContent
