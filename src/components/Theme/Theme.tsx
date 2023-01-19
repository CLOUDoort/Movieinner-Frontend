import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
import { useEffect, useState } from 'react'
import ThemeModal from './ThemeModal'
import LoadingLogo from '../Common/Loading/LoadingLogo'
import useGetThemeMovie from '../../apis/MovieData/ThemeMovie'

const Theme = () => {
    // 페이지가 렌더링된 이후에 useEffect가 되기 때문에, useEffect안에서 state를 변화하는 setState함수를 사용하면 페이지는 상태 변화를 알아차리지 못 한다. 그래서 한 번 더 렌더링 해줘야 상태 변화를 알아차린다.
    // 또한 useEffect setState함수가 첫 렌더링 화면에 바로 적용되는 경우에는 치명적일 수 있다.
    const [modalInfo, setModalInfo] = useState([])
    const { data, isLoading } = useGetThemeMovie()
    const [sliderImage, setSliderImage] = useState([])
    useEffect(() => {
        if (!isLoading) {
            const sliderImageBox = Object.entries(data?.data).map(([key, value]) => (
                {
                    movie_id: value[2].movie_id,
                    movie_name: value[2].movie_name,
                    backdrop_path: value[2].backdrop_path,
                    theme_name: value[2].theme_name
                }
            ))
            setSliderImage(sliderImageBox)
        }
    }, [isLoading])
    const openModal = (e) => {
        const themeModalName = e.target.id
        setShowModal(true)
        setModalInfo(data?.data[themeModalName])
    }
    const [showModal, setShowModal] = useState(false)
    const closeModal = () => setShowModal(!showModal)

    return (
        <>
            {!isLoading ? <ThemeContainer>
                <p>추천 테마</p>
                <ThemeSlider openModal={openModal} sliderImage={sliderImage} />
                <p>테마 리스트</p>
                <ThemeItem openModal={openModal} sliderImage={sliderImage} />
                {showModal ? <ThemeModal closeModal={closeModal} modalInfo={modalInfo} /> : null}
            </ThemeContainer> : <LoadingLogo />}
        </>

    )
}
export default Theme
