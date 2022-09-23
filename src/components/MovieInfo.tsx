import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'
import { MovieInfoContainer, MovieBackdropImgContainer } from './MovieInfo.style'
import Image from 'next/image'
import Link from 'next/link'

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

    console.log('movieInfo: ', movieInfo)
    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                if (!router.isReady) return
                const { movieId } = router.query
                console.log('movieId: ', movieId)
                const response = await apiInstance.get(`/movies/details/${movieId}`)
                const movieResponse = response.data
                const movieInfoBox = {}
                const dataList = ['title', 'backdrop_path', 'poster_path', 'overview', 'runtime', 'release_date']
                dataList.forEach((obj) => {
                    movieInfoBox[obj] = movieResponse[obj]
                })
                setMovieInfo(movieInfoBox)
            } catch (e) {
                console.error('error: ', e.response)
            }
        }
        getMovieInfo()
    }, [router.isReady, router.query])
    if (!movieInfo.backdrop_path) return
    return (
        <>
            <MovieInfoContainer>
                <MovieBackdropImgContainer>
                    <Link target='_blank' rel='noreferrer' href={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}>
                        <a>
                            <Image src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} alt={movieInfo.title} width={600} height={300} />
                        </a>
                    </Link>
                </MovieBackdropImgContainer>

                <div></div>
                <p>{movieInfo.overview}</p>
            </MovieInfoContainer>
        </>
    )
}

export default MovieInfo
