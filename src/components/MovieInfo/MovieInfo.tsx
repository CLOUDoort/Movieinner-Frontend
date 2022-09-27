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
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'

interface MovieInfoDataList {
    title?: string
    backdrop_path?: string
    poster_path?: string
    overview?: string
    runtime?: number
    release_date?: string
}

const MovieInfo = () => {
    const [likeCheck, setLikeCheck] = useState(false)
    const router = useRouter()
    const [movieInfo, setMovieInfo] = useState<MovieInfoDataList | null>({})
    const [actorInfo, setActorInfo] = useState([])
    const [info, setInfo] = useState({
        nickname: '',
        movieId: '',
    })

    const accessToken = useSelector((state: RootState) => state.token.token)
    console.log('accessToken: ', accessToken)
    console.log('movieInfo: ', movieInfo)
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
                if (accessToken) {
                    const checkLiked = await apiInstance.post('movies/liked/movie', { nickname: nicknameResponse, movieId: movieId })
                    console.log('sdsd', checkLiked)
                    if (checkLiked.data.isExisted) {
                        setLikeCheck(true)
                    }
                }
                // 리프레시 토큰이 있을경우 if / DB에
            } catch (e) {
                console.error('error: ', e.response)
            }
        }
        getMovieInfo()
    }, [router.isReady, router.query])

    const clickLikeBtn = async () => {
        // 리프레시 토큰이 있는 경우에 찜하기 하고 없으면 toast로 로그인 필요 알림 띄우기
        try {
            const clickLikeResponse = await apiInstance.post('movies/liked', {
                type: 'movie',
                nickname: info.nickname,
                movieId: info.movieId,
                name: movieInfo.title,
                poster_path: movieInfo.poster_path,
                backdrop_path: movieInfo.backdrop_path,
            })
            console.log('클릭성공', clickLikeResponse)
            toast.success('마이페이지에 담김')
            setLikeCheck(true)
        } catch (e) {
            console.error(e.response)
            toast.error('이미 있음')
        }
    }
    const clickDeleteBtn = async () => {
        try {
            const clickDeleteResponse = await apiInstance.delete('movies/liked', {
                data: {
                    type: 'movie',
                    nickname: info.nickname,
                    name: movieInfo.title,
                },
            })
            console.log('clickdelete', clickDeleteResponse)
            toast.success('삭제완료')
            setLikeCheck(false)
        } catch (e) {
            console.log(e.response)
        }
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
                        {!likeCheck ? <button onClick={clickLikeBtn}>좋아요</button> : <button onClick={clickDeleteBtn}>좋아요 누른 영화</button>}
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
