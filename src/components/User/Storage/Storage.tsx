import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { apiInstance } from '../../../apis/setting'
import { StorageContainer } from './Storage.style'
import StorageTheme from './StorageTheme'
import StorageMovie from './StorageMovie'
import StorageWatched from './StorageWatched'

const Storage = () => {
    const [liked, setLiked] = useState({
        theme: [],
        movie: [],
    })
    const [watched, setWatched] = useState([])

    const router = useRouter()
    const { nickname } = router.query
    useEffect(() => {
        const getResponse = async () => {
            try {
                const themeResponse = await apiInstance.get('/movies/liked/theme', {
                    params: {
                        nickname: nickname,
                    },
                })
                const movieResponse = await apiInstance.get('/movies/liked/movie', {
                    params: {
                        nickname: nickname,
                    },
                })
                setLiked({ ...liked, theme: themeResponse.data.liked, movie: movieResponse.data.liked })
            } catch (e) {
                console.error(e.response)
            }
        }
        getResponse()
    }, [])

    console.log('liked', liked)

    return (
        <StorageContainer>
            <StorageTheme themeLiked={liked.theme} />
            <StorageMovie movieLiked={liked.movie} />
            <StorageWatched />
        </StorageContainer>
    )
}

export default Storage
