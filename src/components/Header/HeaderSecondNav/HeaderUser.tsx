import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { HeaderUserBox } from './HeaderSecondNav.style'
import { RiArrowDownSLine } from 'react-icons/ri'
import HeaderSettingModal from './HeaderSettingModal'
import { apiInstance } from '../../../apis/setting'
import { setEmail, setIdx, setNickname, setToken } from '../../../store/reducers/logintokenSlice'
import { CommonLogout } from '../../Common/CommonLogout'

const HeaderUser = (props) => {
    const { loginToken, userImage, nickname } = props
    const [loginToggle, setLoginToggle] = useState(false)
    const [showSetting, setShowSetting] = useState(false)
    const dispatch = useDispatch()
    const router = useRouter()

    const clickSetting = () => setShowSetting(!showSetting)
    // 브라우저에 refreshToken이 있으면 액세스 토큰 재발급
    useEffect(() => {
        const refreshTokenCheck = async () => {
            const refreshTokenResponse = await apiInstance.get('/auth')
            const { isRefreshToken } = refreshTokenResponse.data
            if (isRefreshToken) {
                try {
                    const response = await apiInstance.post('/auth/refresh')
                    dispatch(setToken(response.data.accessToken))
                } catch (e) {
                    console.log(e.response)
                }
            } else {
                console.log('none-refreshToken')
            }
        }
        refreshTokenCheck()
    }, [])

    // 토큰 바뀔 때마다 필요한 redux 값 재설정
    useEffect(() => {
        const getResponse = async () => {
            if (loginToken) {
                setLoginToggle(true)
                const tokenPayload = await apiInstance.post('/auth/verify', { token: loginToken })
                dispatch(setNickname(tokenPayload.data.payload.nickname))
                dispatch(setEmail(tokenPayload.data.payload.email))
                dispatch(setIdx(tokenPayload.data.payload.idx))
            } else setLoginToggle(false)
        }
        getResponse()
    }, [loginToken])

    const clickLoginLogout = async () => {
        if (loginToggle) CommonLogout()
        else router.push('/login')
    }

    return (
        <HeaderUserBox>
            {!loginToken
                ?
                <>
                    <button onClick={clickLoginLogout}>{loginToken ? '로그아웃' : '로그인'}</button><button onClick={() => router.push('/signup')}>회원가입</button>
                </>
                :
                <>
                    <div onClick={clickSetting}>
                        <Image src={userImage?.image_URL ? userImage?.image_URL : '/blank.png'} width={45} height={45} alt='프로필 이미지' />
                        <div>{nickname}</div>
                        <RiArrowDownSLine size={20} />
                    </div>
                    {showSetting ? <HeaderSettingModal clickSetting={clickSetting} /> : null}
                </>
            }
        </HeaderUserBox>
    )
}

export default HeaderUser