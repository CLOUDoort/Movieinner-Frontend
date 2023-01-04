import { useRouter } from "next/router"
import { UserDataContainer, UserPostDataList } from "./UserData.style"

const UserPostList = (props) => {
    const { userPostList } = props
    const router = useRouter()
    return (
        <UserDataContainer>
            <div>작성한 게시물</div>
            <UserPostDataList>
                <div>
                    <div>
                        <span>번호</span>
                        <span>제목</span>
                        <span>날짜</span>
                    </div>
                </div>
                {userPostList.map((obj) => (
                    <div key={obj.idx}>
                        <div>
                            <div>{obj.number}</div>
                            <div onClick={() => router.push(`/community/post/${obj.idx}`)}>{obj.title}</div>
                            <div>{obj.created_at}</div>
                        </div>
                    </div>
                ))}
            </UserPostDataList>
        </UserDataContainer>
    )
}

export default UserPostList