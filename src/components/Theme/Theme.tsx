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
    const [sliderImage, setSliderImage] = useState([])
    const [posterInfo, setPosterInfo] = useState([])

    const themeList = ['horror', 'action', 'music', 'romance', 'animation', 'sf']
    useEffect(() => {
        const getInfo = async () => {
            try {
                for (const theme of themeList) {
                    const themeResponse: any = await apiInstance.get(`/movies/theme/${theme}`)
                    setThemeInfo({ ...themeInfo, [theme]: themeResponse.data })
                }
            } catch (e) {
                console.log(e)
            }
        }
        getInfo()
    }, [])
    console.log(themeInfo)

    // slider & themeItem image 배열화
    for (const theme in themeList) {
        const themeMovieList = themeInfo[theme]
        const movie = themeMovieList[0] //  첫 영화의 backdrop image 사용
        setSliderImage([...sliderImage, { idx: [movie.idx], backdrop_path: movie.backdrop_path }])
    }
    // themeModal info 배열화
    for (const theme of themeList) {
        const MovieList = themeInfo[theme]
    }

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
            <ThemeSlider openModal={openModal} sliderImage={sliderImage} />
            <p>테마 리스트</p>
            <ThemeItem openModal={openModal} sliderImage={sliderImage} />
            {showModal ? <ThemeModal showModal={true} closeModal={closeModal} themeInfo={themeInfo} /> : null}
        </ThemeContainer>
    )
}

export default Theme
