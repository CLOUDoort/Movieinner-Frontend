import { useEffect } from 'react'
import Loading from '../../Loading'

const GoogleLogin = () => {
    useEffect(() => {
        const tokenURL = new URL(window.location.href).searchParams.get('code')
        console.log(tokenURL)
    })
    return (
        <>
            <Loading />
        </>
    )
}

export default GoogleLogin
