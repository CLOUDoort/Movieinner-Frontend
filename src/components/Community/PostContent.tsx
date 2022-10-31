import { AiOutlineMore } from 'react-icons/ai'
import { PostContentArea, PostContents, PostInfo } from './Post.style'

const PostContent = (props) => {
    const { data, clickModify } = props
    return (
        <PostContentArea>
            <PostInfo>
                <div>{data?.data?.content?.nickname}</div>
                <div>
                    <div>date</div>
                    <AiOutlineMore size={30} onClick={clickModify} />
                </div>
            </PostInfo>
            <PostContents>
                <div>{data?.data?.content?.title}</div>
                <div dangerouslySetInnerHTML={{ __html: data?.data?.content?.content }} />
            </PostContents>
        </PostContentArea>
    )
}

export default PostContent
