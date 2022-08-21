import { WelcomeContainer, WelcomeText, WelcomeTitle } from './Welcome.style'
import Link from 'next/link'

const Welcome = () => {
    return (
        <>
            <WelcomeContainer>
                <WelcomeTitle>Movie-inner 가입 완료&#33;</WelcomeTitle>
                <hr />
                <WelcomeText>
                    <div>cloudoort님, Movie-inner 가입을 축하합니다&#33;</div>
                    <div>웹 서비스 설명, 이용방법, 유의사항 등</div>
                </WelcomeText>
                <div>
                    <Link href='/'>
                        <button>Home</button>
                    </Link>
                </div>
            </WelcomeContainer>
        </>
    )
}

export default Welcome
