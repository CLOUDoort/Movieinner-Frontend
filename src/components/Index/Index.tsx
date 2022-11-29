import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import useGetPopularMovie from '../react-query/PopularMovie'
import { IndexBox } from './Index.style'
import IndexSlider from './IndexSlider'

const Index = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    // // const [verifyEmail, setVerifyEmail] = useState(false)
    // const verifyEmail = await apiInstance.get('/verify')
    // if (verifyEmail) toast.success('메일 인증에 성공하셨습니다!')
    const popularMovie = useGetPopularMovie().data
    console.log('popular', popularMovie?.data)

    return (
        <IndexBox>
            <IndexSlider />
        </IndexBox>

    )
}

export default Index
