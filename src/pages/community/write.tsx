import Head from 'next/head'
import Write from '../../components/Community/Write'

const signIn = () => {
    return (
        <>
            <Head>
                <title>글쓰기</title>
            </Head>
            <Write />
        </>
    )
}

export default signIn
