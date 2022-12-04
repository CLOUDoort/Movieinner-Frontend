import { UserProfileBox, UserProfileContainer, UserProfileData, UserProfileInfo } from "./User.style"
import Image from "next/image"
import { BsFillPencilFill } from "react-icons/bs"

const UserProfile = (props) => {
    const { nickname } = props
    return (
        <>
            <UserProfileBox>
                <UserProfileContainer>
                    <UserProfileInfo>
                        <Image src={`/blank.png`} width={60} height={60} />
                        <span>{nickname}</span>
                        <span><BsFillPencilFill size={20} /></span>
                    </UserProfileInfo>
                    <UserProfileData>
                        <div>개인정보 수정</div>
                        <div>로그아웃</div>
                    </UserProfileData>
                </UserProfileContainer>
            </UserProfileBox>
        </>
    )
}

export default UserProfile
