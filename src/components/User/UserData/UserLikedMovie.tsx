import Image from 'next/image'
import { useRouter } from 'next/router'
import { StorageMovieScroll, StorageMovieContainer, StorageMovieList, StorageMovieAreaCard, StorageMovieImgBox, StorageMovieTitleBox } from './UserStorage.style'

const UserLikedMovie = (props) => {
    const { userLikedMovie } = props
    const router = useRouter()
    return (
        <StorageMovieScroll>
            <p>좋아요 누른 영화</p>
            <StorageMovieContainer>
                <div>
                    <StorageMovieList>
                        {userLikedMovie.map((obj) => (
                            <StorageMovieAreaCard key={obj.idx}>
                                <div>
                                    <StorageMovieImgBox onClick={() => router.push(`/movie/${obj.movie_id}`)}>
                                        <Image src={`https://image.tmdb.org/t/p/original${obj.poster_path}`} layout='fill' alt={obj.name} />
                                    </StorageMovieImgBox>
                                    <StorageMovieTitleBox>
                                        <strong onClick={() => router.push(`/movie/${obj.movie_id}`)}>{obj.name}</strong>
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

export default UserLikedMovie
