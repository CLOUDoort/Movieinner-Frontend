import { WelcomeBox, WelcomeContainer, WelcomeTitle } from './Welcome.style'
import Link from 'next/link'

const Welcome = () => {
    console.log('welcome!')
    return (
        <WelcomeContainer>
            <WelcomeBox>
                <WelcomeTitle>
                    <div>cloudoort님, Movie-inner 가입을 축하합니다&#33;</div>
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
