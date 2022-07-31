import Head from 'next/head'
import Signup from '../components/Signup'

const signUp = () => {
    return (
        <>
            <Head>
                <title>회원가입</title>
            </Head>
            <Signup />
        </>
    )
}

export default signUp
