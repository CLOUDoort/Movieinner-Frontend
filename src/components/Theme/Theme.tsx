import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
import { useState, useEffect } from 'react'
import ThemeModal from './ThemeModal'
import { apiInstance } from '../../apis/setting'

const Theme = () => {
    const [themeInfo, setThemeInfo] = useState({
        horror: [],
        action: [],
        music: [],
        romance: [],
        animation: [],
        sf: [],
    })
    // const [poster, setPoster] = useState({
    //     horror: '',
    //     action: '',
    //     music: '',
    //     romance: '',
    //     animation: '',
    //     sf: '',
    // })

    const [response, setResponse] = useState([])

    useEffect(() => {
        const getImages = async () => {
            const themeList = ['horror', 'action', 'music', 'romance', 'animation', 'sf']
            for (const theme of themeList) {
                const themeResponse: any = await apiInstance.get(`/movies/theme/${theme}`)
                setResponse(themeInfo[theme])
            }
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
            <ThemeSlider openModal={openModal} image={response} />
            <p>테마 리스트</p>
            <ThemeItem openModal={openModal} image={response} />
            {showModal ? <ThemeModal showModal={true} closeModal={closeModal} image={response} /> : null}
        </ThemeContainer>
    )
}

export default Theme
