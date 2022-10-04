import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { apiInstance } from '../../apis/setting'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query

    useEffect(() => {
        const getResponse = async () => {
            try {
                const themeResponse = await apiInstance.get('/movies/liked/theme', { params: { nickname: nickname } })
                console.info(themeResponse.data.liked)
                const movieResponse = await apiInstance.get('/movies/liked/movie', {
                    params: {
                        nickname: nickname,
                    },
                })
                console.info(movieResponse.data.liked)
            } catch (e) {
                console.error(e.response)
            }
        }
        getResponse()
    }, [])

    console.log(nickname)
    return (
        <>
            <p>mypage</p>
            <Link href={`/user/${nickname}/storage`}>저장소</Link>
        </>
    )
}

export default User
