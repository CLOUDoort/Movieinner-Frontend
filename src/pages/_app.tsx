import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css/bundle'
import '../style/Swiper.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css'
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'

import * as React from 'react'

import type { AppContext, AppInitialProps, AppProps } from 'next/app'

import Footer from '../components/Footer/Footer'
import { Global } from '@emotion/react'
import GlobalCss from '../style/GlobalCss'
import Head from 'next/head'
import Header from '../components/Header/Header'
import { NextComponentType } from 'next'
import { Provider } from 'react-redux'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ToastContainer } from 'react-toastify'
import { queryClient } from "../react-query/queryClient"
import { store } from '../store/store'

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
const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <Head>
                    <title>Movie Inner</title>
                    <meta charSet='utf-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                </Head>
                <main>
                    <Header />
                    <Component {...pageProps} />
                    <ToastContainer />
                    <ReactQueryDevtools />
                </main>
                <Footer />
                <Global styles={GlobalCss} />
            </Provider>
        </QueryClientProvider>
    )
}

export default MyApp
