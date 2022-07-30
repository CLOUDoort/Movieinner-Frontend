import Link from 'next/link'
import { Divcontainer } from './Index.style'

const Index = () => {
    return (
        <>
            <header>
                <Link href='/'>홈</Link>
                <Link href='/'>카테고리</Link>
                <Link href='/'>리뷰</Link>
                <Link href='/'>테마</Link>
                <Link href='/'>마이페이지</Link>
            </header>
            <Divcontainer>
                <p>Movie Inner</p>
                <Link href='community'>Community</Link>
            </Divcontainer>
        </>
    )
}

export default Index
