import Image from 'next/image'
import { ThemeGridContainer, ThemeItemContainer } from './Theme.style'
import ThemeModal from './ThemeModal'

const ThemeItem = () => {
    return (
        <>
            <ThemeGridContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>공포</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>액션</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>음악</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>로맨스</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>애니메이션</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>SF</div>
                </ThemeItemContainer>
            </ThemeGridContainer>
        </>
    )
}

export default ThemeItem
