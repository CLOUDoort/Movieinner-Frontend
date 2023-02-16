import React, { useEffect, useState } from 'react'

import FeedRanking from '../Community/Feed/FeedRanking'
import { IndexBox } from './Index.style'
import IndexPopularList from './IndexPopularList'
import IndexSlider from './IndexSlider'
import IndexUpComingList from './IndexUpComingList'
import LoadingLogo from '../Common/Loading/LoadingLogo'
import useGetHitFeed from '../../react-query/CommunityData/HitFeedData'
import useGetPopularMovie from '../../react-query/MovieData/PopularMovie'
import useGetThemeMovie from '../../react-query/MovieData/ThemeMovie'
import useGetUpComing from '../../react-query/MovieData/UpComing'

const Index = () => {
    const popularMovie = useGetPopularMovie().data
    const themeMovie = useGetThemeMovie().data
    const isLoading = useGetThemeMovie().isLoading
    const hitFeed = useGetHitFeed().data
    const [sliderImage, setSliderImage] = useState([])
    const upComing = useGetUpComing(1).data

    useEffect(() => {
        const getResponse = () => {
            if (!isLoading) {
                const sliderImageBox = Object.entries(themeMovie?.data).map(([key, value]) => ({
                    movie_id: value[2].movie_id,
                    movie_name: value[2].movie_name,
                    backdrop_path: value[2].backdrop_path,
                    theme_name: value[2].theme_name
                }))
                setSliderImage(sliderImageBox)
            }
        }
        getResponse()
    }, [isLoading])

    return (
        <>
            {!isLoading ? <IndexBox>
                <IndexSlider sliderImage={sliderImage} />
                <IndexPopularList popularMovie={popularMovie?.data} />
                <IndexUpComingList upComingList={upComing?.data?.resultArray} />
                <FeedRanking hit={hitFeed} />
            </IndexBox> : <LoadingLogo />}
        </>
    )
}

export default Index
