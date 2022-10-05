import Image from 'next/image'
import Router from 'next/router'
import { StorageMovieScroll, StorageMovieContainer, StorageMovieList, StorageMovieAreaCard, StorageMovieImgBox, StorageMovieTitleBox } from './Storage.style'

const StorageMovie = (props) => {
    const { movieLiked } = props

    return (
        <StorageMovieScroll>
            <p>좋아요 누른 영화</p>
            <StorageMovieContainer>
                <div>
                    <StorageMovieList>
                        {movieLiked.map((obj) => (
                            <StorageMovieAreaCard key={obj.idx}>
                                <div>
                                    <StorageMovieImgBox onClick={() => Router.push(`/movie/${obj.movie_id}`)}>
                                        <Image src={`https://image.tmdb.org/t/p/original${obj.poster_path}`} layout='fill' alt={obj.name} />
                                    </StorageMovieImgBox>
                                    <StorageMovieTitleBox>
                                        <strong onClick={() => Router.push(`/movie/${obj.movie_id}`)}>{obj.name}</strong>
                                    </StorageMovieTitleBox>
                                </div>
                            </StorageMovieAreaCard>
                        ))}
                    </StorageMovieList>
                </div>
            </StorageMovieContainer>
        </StorageMovieScroll>
    )
}

export default StorageMovie
