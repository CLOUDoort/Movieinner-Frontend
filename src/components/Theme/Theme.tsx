import ThemeSlider from './ThemeSlider'
import ThemeItem from './ThemeItem'
import { ThemeContainer } from './Theme.style'
import { useState, useEffect, useRef } from 'react'
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

                // 테마별 영화 모음
                const themeInfoBox = {}
                themeList.map((obj) => {
                    themeInfoBox[obj] = themeResponse[obj]
                })
                setThemeInfo(themeInfoBox)

                // 테마별 slide & item 에 들어갈 영화 모음
                const sliderImageBox = []
                themeList.map((obj) => {
                    sliderImageBox.push({
                        movie_id: themeResponse[obj][0].movie_id,
                        movie_name: themeResponse[obj][0].movie_name,
                        backdrop_path: themeResponse[obj][0].backdrop_path,
                        theme_name: themeResponse[obj][0].theme_name,
                    })
                })
                setSliderImage(sliderImageBox)
            } catch (e) {
                console.log(e)
            }
        }
        getImages()
    }, [])

    console.log('themeInfo: ', themeInfo)
    console.log('SliderImage: ', sliderImage)
    const openModal = (e) => {
        const themeModalName = e.target.alt
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

// const Theme = () => {
//     // 반복문 내에서는 useState 함수 사용 불가능
//     // const themeInfo = useRef({})
//     //=> 객체 setState
//     // const [themeInfo, setThemeInfo] = useState()
//     const themeInfo = useRef({})
//     const sliderImage = useRef([])

//     useEffect(() => {
//         const getInfo = async () => {
//             try {
//                 const theme: any = await apiInstance.get(`/movies/theme`)
//                 themeInfo.current = theme.data
//                 console.log(themeInfo.current)
//                 // set함수 사용 왜 안되는지...
//                 const themeList = Object.keys(themeInfo.current)
//                 console.log(themeList)
//                 for (const a of themeList) {
//                     sliderImage.current.push({
//                         movie_id: themeInfo.current[a][0].movie_id,
//                         backdrop_path: themeInfo.current[a][0].backdrop_path,
//                         theme_name: themeInfo.current[a][0].theme_name,
//                     })
//                     console.log('hello')
//                 }
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//         getInfo()
//     }, [])
//     console.log('sliderImage: ', sliderImage.current)
//     const [modalInfo, setModalInfo] = useState([])
//     const openModal = (e) => {
//         const themeModalName = e.target.alt
//         console.log(e.target.alt)
//         setShowModal(true)
//         setModalInfo(themeInfo.current[themeModalName])
//     }

//     const [showModal, setShowModal] = useState(false)
//     const closeModal = () => {
//         setShowModal(false)
//     }
//     return (
//         <ThemeContainer>
//             <p>추천 테마</p>
//             <ThemeSlider openModal={openModal} sliderImage={sliderImage.current} />
//             <p>테마 리스트</p>
//             <ThemeItem openModal={openModal} sliderImage={sliderImage.current} />
//             {showModal ? <ThemeModal showModal={true} closeModal={closeModal} modalInfo={modalInfo} /> : null}
//         </ThemeContainer>
//     )
// }

// export default Theme
