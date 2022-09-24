import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { MovieInfoContainer, MovieBackdropImgContainer } from './MovieInfo.style'
import Image from 'next/image'
import Link from 'next/link'
import MovieInfoActor from './MovieInfoActor'

interface MovieInfoDataList {
    title?: string
    backdrop_path?: string
    poster_path?: string
    overview?: string
    runtime?: number
    release_date?: string
}

const MovieInfo = () => {
    const router = useRouter()
    const [movieInfo, setMovieInfo] = useState<MovieInfoDataList | null>({})
    const [actorInfo, setActorInfo] = useState([])

    console.log('movieInfo: ', movieInfo)
    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                if (!router.isReady) return
                const { movieId } = router.query
                console.log('movieId: ', movieId)
                const movieResponse = await apiInstance.get(`/movies/details/${movieId}`)
                console.log('MovieResponse: ', movieResponse)
                const movieInfoData = movieResponse.data
                const movieInfoBox = {}
                const dataList = ['title', 'backdrop_path', 'poster_path', 'overview', 'runtime', 'release_date']
                dataList.forEach((obj) => {
                    movieInfoBox[obj] = movieInfoData[obj]
                })
                setMovieInfo(movieInfoBox)

                const actorResponse = await apiInstance.get(`movies/credits/${movieId}`)
                const actorInfoData = actorResponse.data
                setActorInfo(actorInfoData)
            } catch (e) {
                console.error('error: ', e.response)
            }
        }
        getMovieInfo()
    }, [router.isReady, router.query])

    console.log('actorInfoResponse: ', actorInfo)
    // if (!movieInfo.backdrop_path) return
    return (
        <>
            {movieInfo && actorInfo && (
                <MovieInfoContainer>
                    <MovieBackdropImgContainer>
                        <Image src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} alt={movieInfo.title} layout='fill' />
                    </MovieBackdropImgContainer>
                    <div></div>
                    <p>{movieInfo.overview}</p>
                    <MovieInfoActor actorInfo={actorInfo} />
                    <p>찜하기</p>
                </MovieInfoContainer>
            )}
        </>
    )
}

export default MovieInfo
