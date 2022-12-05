import Image from 'next/image'
import Router from 'next/router'
import { StorageMovieScroll, StorageMovieContainer, StorageMovieList, StorageMovieAreaCard, StorageMovieImgBox, StorageMovieTitleBox } from './UserStorage.style'

const UserLikedMovie = (props) => {
    const { userLikedMovie } = props

    return (
        <StorageMovieScroll>
            <p>좋아요 누른 영화</p>
            <StorageMovieContainer>
                <div>
                    <StorageMovieList>
                        {userLikedMovie.map((obj) => (
                            <StorageMovieAreaCard key={obj.idx}>
                                <div>
                                    <StorageMovieImgBox >
                                        <Image src={`https://image.tmdb.org/t/p/original${obj.poster_path}`} layout='fill' alt={obj.name} />
                                    </StorageMovieImgBox>
                                    <StorageMovieTitleBox>
                                        <strong >{obj.name}</strong>
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
