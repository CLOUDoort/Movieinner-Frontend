import ThemeSlider from './ThemeSlider'
import { ThemeContainer, ThemeGridContainer, ThemeItem } from './Theme.style'
import Image from 'next/image'
import { useState } from 'react'
import ThemeModal from './ThemeModal'

const Theme = () => {
    // backdropImage
    const [images, setImages] = useState({
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
        sixth: '',
    })

    return (
        <ThemeContainer>
            <p>추천 테마</p>
            <ThemeSlider images={images} onClick={() => <ThemeModal />} />
            <p>테마 리스트</p>
            <ThemeGridContainer>
                <ThemeItem>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>공포</div>
                </ThemeItem>
                <ThemeItem>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>액션</div>
                </ThemeItem>
                <ThemeItem>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>음악</div>
                </ThemeItem>
                <ThemeItem>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>로맨스</div>
                </ThemeItem>
                <ThemeItem>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>애니메이션</div>
                </ThemeItem>
                <ThemeItem>
                    <Image src='/blackphone.jpeg' alt='이미지' width={500} height={300} onClick={() => <ThemeModal />} />
                    <div>SF</div>
                </ThemeItem>
            </ThemeGridContainer>
        </ThemeContainer>
    )
}

export default Theme
