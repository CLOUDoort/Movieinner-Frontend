import Head from 'next/head'
import Signin from '../components/Signin'

const signIn = () => {
    return (
        <>
            <Head>
                <title>회원가입</title>
            </Head>
            <Signin />
        </>
    )
}

export default signIn
