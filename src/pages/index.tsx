import Head from 'next/head'
import Link from 'next/link'

const Index = () => {
    return (
        <>
            <Head>
                <title>Homepage</title>
            </Head>
            <Link href='community'>Community</Link>
        </>
    )
}

export default Index
