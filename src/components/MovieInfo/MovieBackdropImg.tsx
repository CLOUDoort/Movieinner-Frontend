import { MovieBackdropImgContainer } from './MovieInfo.style'
import Image from 'next/image'
import Link from 'next/link'

const MovieBackdropImg = (props) => {
    const { movieInfo } = props

    return (
        <Link href={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`}>
            <MovieBackdropImgContainer>
                <Image src={`https://image.tmdb.org/t/p/w500${movieInfo.backdrop_path}`} alt={movieInfo.title} layout='fill' priority={true} />
            </MovieBackdropImgContainer>
        </Link>
    )
}

export default MovieBackdropImg
