import type { AppProps } from 'next/app'
import * as React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import GlobalCss from '../style/GlobalCss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Global } from '@emotion/react'
import 'keen-slider/keen-slider.min.css'
import '../style/slider.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Movie Inner</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
            <ToastContainer />
            <Global styles={GlobalCss} />
        </>
    )
}

export default MyApp
