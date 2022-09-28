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
    MovieBtnContainer,
} from './MovieInfo.style'
import Image from 'next/image'
import { toast } from 'react-toastify'
import MovieActorInfo from './MovieActorInfo'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import MovieLike from './MovieLike'

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
    const [info, setInfo] = useState({
        nickname: '',
        movieId: '',
    })

    const accessToken = useSelector((state: RootState) => state.token.token)

    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                if (!router.isReady) return
                const { movieId }: any = router.query
                console.log('movieId:', movieId)
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

                // 로그인 검사 여부
                const tokenResponse = await apiInstance.post('auth/verify', {
                    token: accessToken,
                })
                const nicknameResponse = tokenResponse.data.payload.nickname
                setInfo({ ...info, nickname: nicknameResponse, movieId: movieId })
                // 리프레시 토큰이 있을경우 if / DB에
            } catch (e) {
                console.error('error: ', e.response)
            }
        }
        getMovieInfo()
    }, [router.isReady, router.query])

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
                    <MovieBtnContainer>
                        <MovieLike accessToken={accessToken} info={info} movieInfo={movieInfo} />
                        <button onClick={() => router.push('/community')}>리뷰 쓰기</button>
                        {/* dymanic router 이용해서 각 영화에 맞는 리뷰 쓰도록 유도 */}
                    </MovieBtnContainer>
                    <HorizontalRule />
                    <MovieActorInfo actorInfo={actorInfo} />
                </MovieInfoContainer>
            )}
        </>
    )
}

export default MovieInfo
