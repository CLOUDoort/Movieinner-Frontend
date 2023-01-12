import React, { useEffect, useState } from 'react'
import useGetPopularMovie from '../../apis/react-query/PopularMovie'
import useGetThemeMovie from '../../apis/react-query/ThemeMovie'
import { IndexBox } from './Index.style'
import IndexSlider from './IndexSlider'
import IndexPopularList from './IndexPopularList'
import useGetHitFeed from '../../apis/react-query/HitFeedData'
import FeedRanking from '../Community/Feed/FeedRanking'
import IndexUpComingList from './IndexUpComingList'
import useGetUpComing from '../../apis/react-query/UpComing'
import LoadingLogo from '../Common/Loading/LoadingLogo'

const Index = () => {
    const popularMovie = useGetPopularMovie().data
    const themeMovie = useGetThemeMovie().data
    const isLoading = useGetThemeMovie().isLoading
    const hitFeed = useGetHitFeed().data
    const hitLoading = useGetHitFeed().isLoading
    const [sliderImage, setSliderImage] = useState([])
    const upComing = useGetUpComing(1).data

    let rankingNum = 1;
    const hitDataList = hitFeed?.data?.top5Contents.map((obj) => ({
        ...obj, rankingNum: rankingNum++
    }))
    useEffect(() => {
        const getResponse = () => {
            if (!isLoading) {
                const sliderImageBox = Object.entries(themeMovie?.data).map(([key, value]) => ({
                    movie_id: value[0].movie_id,
                    movie_name: value[0].movie_name,
                    backdrop_path: value[0].backdrop_path,
                    theme_name: value[0].theme_name
                }))
                setSliderImage(sliderImageBox)
            }
        }
        getResponse()
    }, [isLoading])

    return (
        <>
            {!isLoading && !hitLoading ? <IndexBox>
                <IndexSlider sliderImage={sliderImage} />
                <IndexPopularList popularMovie={popularMovie?.data} />
                <IndexUpComingList upComingList={upComing?.data?.resultArray} />
                <FeedRanking hit={hitDataList} />
            </IndexBox> : <LoadingLogo />}
        </>
    )
}

export default Index
