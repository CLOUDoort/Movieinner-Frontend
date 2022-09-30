import Image from 'next/image'
import { ThemeGridContainer, ThemeItemContainer } from './Theme.style'

const ThemeItem = (props) => {
    const { openModal, sliderImage } = props

    return (
        <ThemeGridContainer>
            {sliderImage.map((obj: any) => (
                <ThemeItemContainer key={obj.movie_id}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w1280${obj.backdrop_path}`}
                        id={obj.theme_name}
                        alt={obj.theme_name}
                        onClick={openModal}
                        layout='fill'
                        objectFit='contain'
                    />
                    <div>{obj.theme_name}</div>
                </ThemeItemContainer>
            ))}
        </ThemeGridContainer>
    )
}

export default ThemeItem
