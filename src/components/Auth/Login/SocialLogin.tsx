import Link from 'next/link'
import { SocialLoginServiceDiv, GoogleLogin, NaverLogin } from './Login.style'
import Image from 'next/image'
import { GOOGLE_AUTH_URL, NAVER_AUTH_URL, KAKAO_AUTH_URL } from '../../../Lib/SocialLoginData'

const SocialLogin = () => {
    return (
        <SocialLoginServiceDiv>
            <Link href={GOOGLE_AUTH_URL}>
                <a>
                    <GoogleLogin>
                        <Image src='/btn_google.svg' width={50} height={50} alt='Google 로그인' />
                        <label>Google 로그인</label>
                    </GoogleLogin>
                </a>
            </Link>
            <Link href={NAVER_AUTH_URL}>
                <a>
                    <NaverLogin>
                        <Image src='/btn_naver.png' width={50} height={50} alt='네이버 로그인' />
                        <label>네이버 로그인</label>
                    </NaverLogin>
                </a>
            </Link>
            <Link href={KAKAO_AUTH_URL}>
                <a>
                    <Image src='/btn_kakao.png' width={350} height={50} alt='카카오 로그인' />
                </a>
            </Link>
        </SocialLoginServiceDiv>
    )
}

export default SocialLogin
