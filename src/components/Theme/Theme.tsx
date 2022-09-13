import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
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
    const [modal, setModal] = useState(false)
    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }

    return (
        <ThemeContainer>
            <p>추천 테마</p>
            <ThemeSlider images={images} onClick={() => <ThemeModal />} />
            <p>테마 리스트</p>
            <ThemeItem />
        </ThemeContainer>
    )
}

export default Theme
