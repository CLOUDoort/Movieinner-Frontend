import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
import { useState, useEffect, useRef } from 'react'
import ThemeModal from './ThemeModal'
import { apiInstance } from '../../apis/setting'

const Theme = () => {
    let sliderImage = []

    // 반복문 내에서는 useState 함수 사용 불가능
    const themeInfo = useRef({})
    // let themeInfo
    // const themeList = useRef([])
    useEffect(() => {
        const getInfo = async () => {
            try {
                const theme = await apiInstance.get('/movies/theme')
                // set함수 사용 왜 안되는지...
                themeInfo.current = theme.data
                const themeList = Object.keys(theme.data)
                for (const a of themeList) {
                    sliderImage.push({
                        movie_id: themeInfo.current[a][0].movie_id,
                        backdrop_path: themeInfo.current[a][0].backdrop_path,
                        theme_name: themeInfo.current[a][0].theme_name,
                    })
                }
            } catch (e) {
                console.log(e)
            }
        }
        getInfo()
    }, [])

    console.log('sliderImage: ', sliderImage)
    const [modalInfo, setModalInfo] = useState([])
    const openModal = (e) => {
        const themeModalName = e.target.alt
        console.log(e.target.alt)
        setShowModal(true)
        setModalInfo(themeInfo.current[themeModalName])
    }

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
