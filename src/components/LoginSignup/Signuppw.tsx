<<<<<<< HEAD
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
import {
    CircleBox,
    CircleDiv,
    CurrentStatusDiv,
    CurrentTextDiv,
    EmailForm,
    HorizontalRule,
    ProgressBtn,
    SignupContainerDiv,
    StatusCircleDiv,
} from './Signup.style'
=======
import { useState } from 'react'
import CurrentStatusSecond from './CurrentStatus/CurrentStatusSecond'
import { EmailForm, ProgressBtn, SignupContainerDiv } from './Signup_pw.style'
>>>>>>> upstream/main

const Signuppw = () => {
    const router = useRouter()
    const { insertId, key } = router.query
    const [verification, setVerification] = useState({
        success: false,
        isVerified: false,
    })
    useEffect(() => {
        if (!router.isReady) return //useRouter 처음부터 pid 못 가져오기 때문에 params 확인해야함.
        const getRequest = async () => {
            const response = await apiInstance.get(`/verify/${insertId}`, {
                params: { key: key },
            })
            //axios 수정
            setVerification(response.data)
        }
        getRequest()
    }, [router.isReady])
    const { isVerified } = verification
    console.log(`insertId: ${insertId}, key:${key} verification:${isVerified}`)
    console.log(verification)

    const [password, setPassword] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setPassword(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
<<<<<<< HEAD
    if (isVerified) {
        return (
            <>
                <SignupContainerDiv>
                    <div>비밀번호 설정</div>
                    <EmailForm onSubmit={handleSubmit}>
                        <div>비밀번호</div>
                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                            placeholder='비밀번호를 입력해주세요'
                        />
                        <div>비밀번호 확인</div>
                        <input
                            type='password'
                            name='pwCheck'
                            placeholder='비밀번호를 다시 입력해주세요'
                        />
                    </EmailForm>
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
                            <StatusCircleDiv></StatusCircleDiv>
                            <StatusCircleDiv></StatusCircleDiv>
                            <CircleDiv></CircleDiv>
                        </CircleBox>
                    </CurrentStatusDiv>
                    <div>
                        <ProgressBtn>계속하기</ProgressBtn>
                    </div>
                </SignupContainerDiv>
            </>
        )
    } else {
        return (
            <div>
                <p>잘못된 접근입니다.</p>
            </div>
        )
    }
=======

    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusSecond />
                <div>비밀번호 설정</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>비밀번호</div>
                    <input type='password' name='password' value={password} onChange={handleChange} placeholder='비밀번호를 입력해주세요' />
                    <div>비밀번호 확인</div>
                    <input type='password' name='pwCheck' placeholder='비밀번호를 다시 입력해주세요' />
                </EmailForm>

                <div>
                    <ProgressBtn>계속하기</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
>>>>>>> upstream/main
}

export default Signuppw
