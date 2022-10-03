import Link from 'next/link'
import { useRouter } from 'next/router'

const User = () => {
    const router = useRouter()
    const { nickname } = router.query
    console.log(nickname)
    return (
        <>
            <p>mypage</p>
            <Link href={`/user/${nickname}/storage`}>저장소</Link>
        </>
    )
}

export default User
