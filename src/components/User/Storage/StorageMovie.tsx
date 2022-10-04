import Image from 'next/image'
import Link from 'next/link'
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
                                    <StorageMovieImgBox>
                                        <Link href={`/movie/${obj.movie_id}`}>
                                            <a>
                                                <Image src={`https://image.tmdb.org/t/p/original${obj.poster_path}`} layout='fill' alt={obj.name} />
                                            </a>
                                        </Link>
                                    </StorageMovieImgBox>
                                    <StorageMovieTitleBox>
                                        <strong>{obj.name}</strong>
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
