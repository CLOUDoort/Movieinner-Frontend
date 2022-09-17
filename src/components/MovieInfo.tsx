import { useEffect } from 'react'
import { apiInstance } from '../apis/setting'
import { MovieInfoContainer } from './MovieInfo.style'

const MovieInfo = () => {
    useEffect(() => {
        const getMovieInfo = async () => {
            const response = await apiInstance.get('')
        }
        getMovieInfo()
    }, [])
    return (
        <>
            <MovieInfoContainer>
                <p>Movie Info</p>
            </MovieInfoContainer>
        </>
    )
}

export default MovieInfo
