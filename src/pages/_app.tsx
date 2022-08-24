import type { AppProps } from 'next/app'
import * as React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'
import { store } from '../store/store'
import { Provider } from 'react-redux'
import GlobalCss from '../style/GlobalCss'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Global } from '@emotion/react'
import 'keen-slider/keen-slider.min.css'
import '../style/slider.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

declare global {
    interface UserDataState {
        email?: string
        password?: string
        nickname?: string
        name?: string
        birth?: string
        gender?: string
        image_URL?: string
    }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Movie Inner</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <Provider store={store}>
                <Header />
                <main>
                    <Component {...pageProps} />
                    <Footer />
                </main>
            </Provider>
            <ToastContainer />
            <Global styles={GlobalCss} />
        </>
    )
}

export default MyApp
