import Image from 'next/image'
import { useRouter } from 'next/router'
import { StorageMovieAreaCard, StorageMovieContainer, StorageMovieImgBox, StorageMovieList, StorageMovieScroll, StorageMovieTitleBox } from './UserStorage.style'


const UserLikedTheme = (props) => {
    const router = useRouter()
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
                                    <StorageMovieImgBox onClick={() => router.push(`/theme`)}>
                                        <Image src={`https://image.tmdb.org/t/p/w780/${obj.poster_path}`} layout='fill' alt={obj.name} />
                                    </StorageMovieImgBox>
                                    <StorageMovieTitleBox>
                                        <strong onClick={() => router.push(`/theme`)}>{obj.name}</strong>
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
