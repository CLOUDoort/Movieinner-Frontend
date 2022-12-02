import { UserProfileBox, UserProfileContainer, UserProfileInfo } from "./User.style"
import Image from "next/image"

const UserProfile = (props) => {
    const { nickname } = props
    return (
        <>
            <UserProfileBox>
                <UserProfileContainer>
                    <UserProfileInfo>
                        <Image src={`/blank.png`} width={100} height={100} />
                        <span>{nickname}ㄴㅇㄴㅇㄴㅇ</span>
                    </UserProfileInfo>
                </UserProfileContainer>
            </UserProfileBox>
        </>
    )
}

export default UserProfile
