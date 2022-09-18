import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
import { useState, useEffect } from 'react'
import ThemeModal from './ThemeModal'
import { apiInstance } from '../../apis/setting'

const Theme = () => {
    const [sliderImage, setSliderImage] = useState([])

    // 반복문 내에서는 useState 함수 사용 불가능

    const [themeInfo, setThemeInfo] = useState([])
    const themeList = ['horror', 'action', 'music', 'romance', 'animation', 'sf']
    useEffect(() => {
        const getInfo = async () => {
            try {
                const theme = await apiInstance.get('/movies/theme')
                setThemeInfo(theme.data)
                for (const theme of themeList) {
                    const themeMovieList = themeInfo[theme]
                    const firstMovie = themeMovieList[0]
                    sliderImage.push({ idx: firstMovie.idx, backdrop_path: firstMovie.backdrop_path, theme_name: firstMovie.theme_name })
                }
            } catch (e) {
                console.log(e)
            }
        }
        getInfo()
    }, [])

    const openModal = (e) => {
        const themeModalName = e.target.alt
        const modalInfo = themeInfo[themeModalName]
        console.log(e.target.alt)
        setShowModal(true)
        console.log('modalInfo', modalInfo)
        // return modalInfo
    }
    let modalInfo = openModal

    const [showModal, setShowModal] = useState(false)
    const closeModal = () => {
        setShowModal(false)
    }
    return (
        <ThemeContainer>
            <p>추천 테마</p>
            <ThemeSlider openModal={openModal} sliderImage={sliderImage} />
            <p>테마 리스트</p>
            <ThemeItem openModal={openModal} sliderImage={sliderImage} />
            {showModal ? <ThemeModal showModal={true} closeModal={closeModal} modalInfo={modalInfo} /> : null}
        </ThemeContainer>
    )
}

export default Theme
