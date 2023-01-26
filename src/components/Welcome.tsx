import { WelcomeBox, WelcomeContainer, WelcomeTitle } from './Welcome.style'
import { useDispatch, useSelector } from 'react-redux'

import Link from 'next/link'
import { RootState } from '../store/store'
import { apiInstance } from '../apis/setting'
import { setNickname } from '../store/reducers/logintokenSlice'
import { useEffect } from 'react'

const Welcome = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    const dispatch = useDispatch()
    const nickname = useSelector((state: RootState) => state.nickname.nickname)

    useEffect(() => {
        const getResponse = async () => {
            if (loginToken) {
                const tokenPayload = await apiInstance.post('/auth/verify', { token: loginToken })
                dispatch(setNickname(tokenPayload.data.payload.nickname))
            }
        }
        getResponse()
    }, [loginToken])

    return (
        <WelcomeContainer>
            <WelcomeBox>
                <WelcomeTitle>
                    <div>{nickname}님 Movie-inner 가입을 축하합니다&#33;</div>
                </WelcomeTitle>
                <div>
                    <Link href='/'>
                        <button>Home</button>
                    </Link>
                    <Link href='/login'>
                        <button>로그인</button>
                    </Link>
                </div>
            </WelcomeBox>
        </WelcomeContainer>
    )
}

export default Welcome
