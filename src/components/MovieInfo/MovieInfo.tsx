import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
import {
    MovieInfoContainer,
    MovieBackdropImgContainer,
    MovieFosterImgContainer,
    MovieTextContainer,
    MovieInfoMiddleContainer,
    MovieTextTitle,
    MovieTextOverview,
    HorizontalRule,
} from './MovieInfo.style'
import Image from 'next/image'
import { toast } from 'react-toastify'
import MovieActorInfo from './MovieActorInfo'

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
                setActorInfo(actorResponse.data)
            } catch (e) {
                console.error('error: ', e.response)
            }
        }
        getMovieInfo()
    }, [router.isReady, router.query])

    const clickLikeBtn = async () => {
        // 해당 영화 id DB로 보내고 없으면 각 유저 마이페이지에 영화 담기, 있으면 있다고 실패 UI 띄우기
        toast.success('마이페이지에 담김')
        toast.error('이미 있음')
    }

    console.info('actorInfoResponse: ', actorInfo)
    // if (!movieInfo.backdrop_path) return
    return (
        <>
            {movieInfo && actorInfo && (
                <MovieInfoContainer>
                    <MovieBackdropImgContainer>
                        <Image src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} alt={movieInfo.title} layout='fill' priority={true} />
                    </MovieBackdropImgContainer>
                    <MovieInfoMiddleContainer>
                        <MovieTextContainer>
                            <MovieTextTitle>
                                <p>영화 제목</p>
                                <div>{movieInfo.title}</div>
                            </MovieTextTitle>
                            <MovieTextOverview>
                                <p>영화 설명</p>
                                <div>{movieInfo.overview}</div>
                            </MovieTextOverview>
                        </MovieTextContainer>
                        <MovieFosterImgContainer>
                            <Image src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} alt={movieInfo.title} layout='fill' priority={true} />
                        </MovieFosterImgContainer>
                    </MovieInfoMiddleContainer>
                    <div>
                        <button onClick={clickLikeBtn}>좋아요</button>
                        <button onClick={() => router.push('/community')}>리뷰 쓰기</button>
                        {/* dymanic router 이용해서 각 영화에 맞는 리뷰 쓰도록 유도 */}
                    </div>
                    <HorizontalRule />

                    <MovieActorInfo actorInfo={actorInfo} />
                </MovieInfoContainer>
            )}
        </>
    )
}

export default MovieInfo
