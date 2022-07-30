import Head from 'next/head'
import Theme from '../components/Theme'

const theme = () => {
    return (
        <>
            <Head>
                <title>테마</title>
            </Head>
            <Theme />
        </>
    )
}

export default theme
