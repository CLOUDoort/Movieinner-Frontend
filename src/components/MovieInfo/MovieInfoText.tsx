import { MovieInfoMiddleContainer, MovieFosterImgContainer, MovieTextContainer, MovieTextTitle, MovieTextOverview } from './MovieInfo.style'
import Image from 'next/image'

const MovieInfoText = (props) => {
    const { movieInfo } = props
    return (
        <MovieInfoMiddleContainer>
            <MovieTextContainer>
                <MovieTextTitle>
                    <p>영화 제목</p>
                    <div>{movieInfo.title}</div>
                </MovieTextTitle>
                <MovieTextTitle>
                    <p>개봉일</p>
                    <div>{movieInfo.release_date}</div>
                </MovieTextTitle>
                <MovieTextTitle>
                    <p>상영시간</p>
                    <div>{movieInfo.runtime}분</div>
                </MovieTextTitle>
                <MovieTextOverview>
                    <p>영화 설명</p>
                    <div>{movieInfo.overview}</div>
                </MovieTextOverview>
            </MovieTextContainer>
            <MovieFosterImgContainer>
                <Image src={`https://image.tmdb.org/t/p/w780${movieInfo.poster_path}`} alt={movieInfo.title} layout='fill' priority={true} />
            </MovieFosterImgContainer>
        </MovieInfoMiddleContainer>
    )
}

export default MovieInfoText
