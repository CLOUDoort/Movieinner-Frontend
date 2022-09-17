import Image from 'next/image'
import { ThemeGridContainer, ThemeItemContainer } from './Theme.style'

const ThemeItem = (props) => {
    const { openModal, sliderImage } = props

    return (
        <>
            <ThemeGridContainer>
                {sliderImage.map((obj: any) => (
                    <ThemeItemContainer key={obj.idx}>
                        <Image src={`https://image.tmdb.org/t/p/w500${obj.backdrop_path}`} alt='이미지' width={400} height={300} onClick={openModal} />
                        <div>{obj.theme_name}</div>
                    </ThemeItemContainer>
                ))}
            </ThemeGridContainer>
        </>
    )
}

export default ThemeItem
