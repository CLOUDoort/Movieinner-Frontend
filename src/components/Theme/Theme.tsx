import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
import { useState, useEffect } from 'react'
import ThemeModal from './ThemeModal'
import { apiInstance } from '../../apis/setting'

const Theme = () => {
    // backdropImage
    const [backImages, setBackImages] = useState({
        horror: '',
        action: '',
        music: '',
        romance: '',
        animation: '',
        sf: '',
    })
    const [poster, setPoster] = useState({
        horror: '',
        action: '',
        music: '',
        romance: '',
        animation: '',
        sf: '',
    })

    const [response, setResponse] = useState([])

    useEffect(() => {
        const getImages = async () => {
            const response: any = await apiInstance.get('/movies/theme/music')
            console.log(response.data)
            setResponse(response.data)
        }
        getImages()
    }, [])
    console.log(response)

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
            {showModal ? <ThemeModal showModal={true} closeModal={closeModal} image={response} /> : null}
        </ThemeContainer>
    )
}

export default Theme
