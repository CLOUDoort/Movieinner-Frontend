import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../apis/setting'
import { MovieInfoContainer } from './MovieInfo.style'
import MovieActorInfo from './MovieActorInfo'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import MovieReview from './MovieReview'
import MovieInfoText from './MovieInfoText'
import MovieBackdropImg from './MovieBackdropImg'

interface MovieInfoDataList {
    title?: string
    backdrop_path?: string
    poster_path?: string
    overview?: string
    runtime?: number
    release_date?: string
}

export type RecentMovie = {
    movieId: string
    poster_path: string
}

const MovieInfo = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const [movieInfo, setMovieInfo] = useState<MovieInfoDataList | null>({})
    const [actorInfo, setActorInfo] = useState([])
    const [info, setInfo] = useState({
        nickname: '',
        movieId: '',
    })

    // localstorage는 브라우저내에서만 사용할 수 있다.
    // useEffect는 CSR 전용 hook이기 때문에 이 동작은 브라우저 내에서 이루어지는 것이라 확신을 줄 수 있으므로 useEffect 내에서 localstorage를 사용해도 에러가 나지 않는다.
    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                if (!router.isReady) return
                const { movieId }: any = router.query
                const movieResponse = await apiInstance.get(`/movies/details/${movieId}`)
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
            } catch (e) {
                console.error('error: ', e.response)
            }
        }
        const checkRecentMovie = () => {
            try {
                if (!router.isReady) return
                // const previousWatched: RecentMovie[] = JSON.parse()
            } catch (e) {
                console.error(e.response)
            }
        }
        getMovieInfo()
    }, [router.isReady, router.query, accessToken])

    return (
        <>
            {movieInfo && actorInfo && (
                <MovieInfoContainer>
                    <MovieBackdropImg movieInfo={movieInfo} />
                    <MovieInfoText movieInfo={movieInfo} />
                    <MovieReview accessToken={accessToken} info={info} movieInfo={movieInfo} />
                    <MovieActorInfo actorInfo={actorInfo} />
                </MovieInfoContainer>
            )}
        </>
    )
}

export default MovieInfo
