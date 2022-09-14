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
    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <ThemeContainer>
            <p>추천 테마</p>
            <ThemeSlider openModal={openModal} />
            <p>테마 리스트</p>
            <ThemeItem openModal={openModal} />
            {showModal ? <ThemeModal showModal={true} closeModal={closeModal} /> : null}
        </ThemeContainer>
    )
}

export default Theme
