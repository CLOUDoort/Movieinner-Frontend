import {
    SignupInfoContainer,
    TitleDiv,
    UserInfoDiv,
    CircleBox,
    CurrentStatusDiv,
    CurrentTextDiv,
    HorizontalRule,
    ProgressBtn,
    StatusCircleDiv,
    UserProfile,
    UserInfo,
    UserSex,
} from './Signupinfo.style'
import { useRef, useState } from 'react'
import Image from 'next/image'

const Signupinfo = () => {
    const [image, setImage] = useState('/blank.png')
    const fileInput = useRef(null)

    return (
        <SignupInfoContainer>
            <TitleDiv>회원 정보 입력</TitleDiv>
            <UserProfile>
                <Image src={image} width={150} height={150} alt='이미지입니다.' />
                <UserInfoDiv>
                    <input type='text' placeholder='닉네임을 입력하세요' />
                    <label htmlFor='input-file'>이미지 선택</label>
                    <input type='file' id='input-file' accept='image/*' style={{ display: 'none' }} />
                </UserInfoDiv>
            </UserProfile>
            <UserInfo>
                <div>이름</div>
                <input type='text' name='name' placeholder='이름을 입력하세요' />
                <div>성별</div>
                <UserSex>
                    <button>남자</button>
                    <button>여자</button>
                </UserSex>
                <div>생년월일</div>
                <input type='date' name='birth' placeholder='생년월일을 입력하세요' />
            </UserInfo>
            <CurrentStatusDiv>
                <CurrentTextDiv>
                    <div>이메일 인증</div>
                    <div>비밀번호 설정</div>
                    <div>유저 정보</div>
                </CurrentTextDiv>
                <HorizontalRule>
                    <hr />
                </HorizontalRule>
                <CircleBox>
                    <StatusCircleDiv />
                    <StatusCircleDiv />
                    <StatusCircleDiv />
                </CircleBox>
            </CurrentStatusDiv>
            <div>
                <ProgressBtn onClick={() => confirm('')}>계속하기</ProgressBtn>
            </div>
        </SignupInfoContainer>
    )
}

export default Signupinfo
