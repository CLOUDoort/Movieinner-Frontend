import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../apis/setting'
import { MovieInfoContainer } from './MovieInfo.style'

const MovieInfo = () => {
    const router = useRouter()
    const { movie_id } = router.query
    const [movieInfo, setMovieInfo] = useState({})
    // title, backdrop_path, poster_path, overview, runtime, release_date

    console.log('movieInfo: ', movieInfo)
    console.log('movie_id: ', movie_id)
    useEffect(() => {
        const getMovieInfo = async () => {
            try {
                const response = await apiInstance.get(`/movies/details/${movie_id}`)
                setMovieInfo(response.data)
            } catch (e) {
                console.log(e)
            }
        }
        getMovieInfo()
    }, [])
    return (
        <>
            <MovieInfoContainer>
                <div></div>
                <div></div>
                <p>Movie Info</p>
            </MovieInfoContainer>
        </>
    )
}

export default MovieInfo
