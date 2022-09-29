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

const MovieInfo = () => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const router = useRouter()
    const [movieInfo, setMovieInfo] = useState<MovieInfoDataList | null>({})
    const [actorInfo, setActorInfo] = useState([])
    const [info, setInfo] = useState({
        nickname: '',
        movieId: '',
    })

    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                if (!router.isReady) return
                const { movieId }: any = router.query
                const movieResponse = await apiInstance.get(`/movies/details/${movieId}`)
                const movieInfoData = movieResponse.data
                console.log('sdsd', movieInfoData)
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
