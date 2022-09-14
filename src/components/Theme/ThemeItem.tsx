import Image from 'next/image'
import { ThemeGridContainer, ThemeItemContainer } from './Theme.style'

const ThemeItem = (props) => {
    const openModal = () => {
        props.openModal()
    }

    return (
        <>
            <ThemeGridContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={openModal} />
                    <div>공포</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={openModal} />
                    <div>액션</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={openModal} />
                    <div>음악</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={openModal} />
                    <div>로맨스</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={openModal} />
                    <div>애니메이션</div>
                </ThemeItemContainer>
                <ThemeItemContainer>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={openModal} />
                    <div>SF</div>
                </ThemeItemContainer>
            </ThemeGridContainer>
        </>
    )
}

export default ThemeItem
