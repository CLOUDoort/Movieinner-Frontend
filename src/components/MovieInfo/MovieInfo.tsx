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
import { toast } from 'react-toastify'

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

    // localstorage는 브라우저내에서만 사용할 수 있다.
    // useEffect는 CSR 전용 hook이기 때문에 이 동작은 브라우저 내에서 이루어지는 것이라 확신을 줄 수 있으므로 useEffect 내에서 localstorage를 사용해도 에러가 나지 않는다.
    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                if (!router.isReady) return
                const { movieId }: any = router.query
                const movieResponse = await apiInstance.get(`/movies/details/${movieId}`)
                const movieInfoData = movieResponse.data
                const movieInfoBox: MovieInfoDataList = {}
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

                // 최근 본 영화 추가
                // 데이터 베이스 생성
                const previousWatchedReq = window.indexedDB.open('movieinfo', 1)
                let previousWatched // DB에 접근할 수 있는 레퍼런스 생성
                // // 시간이 걸리는 비동기작업이기 때문에 성공 또는 에러가 났을 때 제어할 객체를 요청해야 한다.
                // success는 DB관련 작업 성공할 때마다 실행, 콜백함수로 open이 성공했을 때 할 작업 실행

                // error는 DB관련 작업 실패 때마다 실행
                previousWatchedReq.onerror = (e: any) => {
                    const error = e.target.error
                    console.error('indexedDB error: ', error.name)
                }
                // 버전이 바뀔 때마다 실행되는 이벤트에서 object store 생성
                previousWatchedReq.onupgradeneeded = (e: any) => {
                    console.info('database upgrade success!')
                    previousWatched = e.target.result
                    previousWatched.createObjectStore('watched', { keyPath: 'id', autoIncrement: true })
                }
                previousWatchedReq.onsuccess = (e: any) => {
                    console.info('database open success!')
                    previousWatched = e.target.result
                    let store = previousWatched.transaction('watched', 'readonly').objectStore('watched')
                    let getAllList = store.getAll()
                    getAllList.onsuccess = (e) => {
                        const watchedMovieList = e.target.result
                        const movieIdList = watchedMovieList.map((arr) => arr.movieId)
                        // 중복
                        if (movieIdList.includes(movieId)) {
                            const movie = watchedMovieList.filter((arr) => arr.movieId === movieId)
                            console.log('asdasdasd', movie)
                            let store = previousWatched.transaction('watched', 'readwrite').objectStore('watched')
                            let deleteMovie = store.delete(movie[0].id)
                            deleteMovie.onsuccess = (e) => {
                                let store = previousWatched.transaction('watched', 'readwrite').objectStore('watched')
                                let addReq = store.add({
                                    movieId: movieId,
                                    title: movieInfoBox.title,
                                    poster_path: movieInfoBox.poster_path,
                                })
                                addReq.onsucces = (e: any) => {
                                    toast.success('중복 삭제 후 추가 성공')
                                }
                            }
                        }
                        // 중복x
                        else {
                            let store = previousWatched.transaction('watched', 'readwrite').objectStore('watched')
                            let addReq = store.add({
                                movieId: movieId,
                                title: movieInfoBox.title,
                                poster_path: movieInfoBox.poster_path,
                            })
                            addReq.onsucces = (e: any) => {
                                toast.success('추가 성공')
                            }
                        }
                        // 최대 10개까지만 저장
                        if (watchedMovieList.length > 10) {
                            let store = previousWatched.transaction('watched', 'readwrite').objectStore('watched')
                            const id = watchedMovieList[0].id
                            let deleteMovie = store.delete(id)
                            deleteMovie.onsuccess = (e) => {
                                toast.error('삭제 성공')
                            }
                        }
                    }
                }
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
