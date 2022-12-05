import Image from 'next/image'
import Router from 'next/router'
import { StorageMovieAreaCard, StorageMovieContainer, StorageMovieImgBox, StorageMovieList, StorageMovieScroll, StorageMovieTitleBox } from './UserStorage.style'


const UserLikedTheme = (props) => {
    const { userLikedTheme } = props
    return (
        <StorageMovieScroll>
            <p>찜한 테마</p>
            <StorageMovieContainer>
                <div>
                    <StorageMovieList>
                        {userLikedTheme.map((obj) => (
                            <StorageMovieAreaCard key={obj.idx}>
                                <div>
                                    <StorageMovieImgBox >
                                        <Image src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`} layout='fill' alt={obj.name} />
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

export default UserLikedTheme
