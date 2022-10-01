import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
import { useState, useEffect } from 'react'
import ThemeModal from './ThemeModal'
import { apiInstance } from '../../apis/setting'

const Theme = () => {
    // 페이지가 렌더링된 이후에 useEffect가 되기 때문에, useEffect안에서 state를 변화하는 setState함수를 사용하면 페이지는 상태 변화를 알아차리지 못 한다. 그래서 한 번 더 렌더링 해줘야 상태 변화를 알아차린다.
    // 또한 useEffect setState함수가 첫 렌더링 화면에 바로 적용되는 경우에는 치명적일 수 있다.
    const [themeInfo, setThemeInfo] = useState({})
    const [sliderImage, setSliderImage] = useState([])
    const [modalInfo, setModalInfo] = useState([])

    useEffect(() => {
        const getImages = async () => {
            try {
                const response: any = await apiInstance.get(`/movies/theme`)
                const themeResponse = response.data
                const themeList = Object.keys(themeResponse)

                // forEach와 map
                // 테마별 영화 모음
                const themeInfoBox = {}
                themeList.forEach((obj) => {
                    themeInfoBox[obj] = themeResponse[obj]
                })
                setThemeInfo(themeInfoBox)

                // 테마별 slide & item 에 들어갈 영화 모음
                // map이 배열을 리턴
                const sliderImageBox = themeList.map((obj) => ({
                    movie_id: themeResponse[obj][0].movie_id,
                    movie_name: themeResponse[obj][0].movie_name,
                    backdrop_path: themeResponse[obj][0].backdrop_path,
                    theme_name: themeResponse[obj][0].theme_name,
                }))
                setSliderImage(sliderImageBox)
            } catch (e) {
                console.error(e)
                // 항상 띄워주고 console.info 사용, 에러는 error
            }
        }
        getImages()
    }, [])
    const openModal = (e) => {
        const themeModalName = e.target.id
        console.log(e.target.alt)
        setShowModal(true)
        setModalInfo(themeInfo[themeModalName])
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
