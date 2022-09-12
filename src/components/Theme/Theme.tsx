import ThemeSlider from './ThemeSlider'
import { ThemeContainer, ThemeGridContainer } from './Theme.style'
import Image from 'next/image'

const Theme = () => {
    return (
        <ThemeContainer>
            <p>추천 테마</p>
            <ThemeSlider />
            <p>테마 리스트</p>
            <ThemeGridContainer>
                <div>테마1</div>
                <div>테마2</div>
                <div>테마3</div>
                <div>테마4</div>
                <div>테마5</div>
                <div>테마6</div>
            </ThemeGridContainer>
        </ThemeContainer>
    )
}

export default Theme
