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
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { apiInstance } from '../apis/setting'
import { setToken } from '../store/reducers/logintokenSlice'

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
    useEffect(() => {
        try {
            const getLoginToken = async () => {
                const response = await apiInstance.post('/auth/refresh')
                store.dispatch(setToken(response.data.accessToken))
                console.log('silent-success')
                console.log(response.data)
            }
            getLoginToken()
        } catch (e) {
            console.log(e.response)
        }
    })
    return (
        <>
            <Head>
                <title>Movie Inner</title>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
            </Head>
            <Header />
            <Provider store={store}>
                <main>
                    <Component {...pageProps} />
                </main>
            </Provider>
            <Footer />
            <ToastContainer />
            <Global styles={GlobalCss} />
        </>
    )
}

export default MyApp
