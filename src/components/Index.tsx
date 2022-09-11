import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Slider from './SliderTheme'

const Index = () => {
    const loginToken = useSelector((state: RootState) => state.token.token)
    // // const [verifyEmail, setVerifyEmail] = useState(false)
    // const verifyEmail = await apiInstance.get('/verify')
    // if (verifyEmail) toast.success('메일 인증에 성공하셨습니다!')

    return <Slider />
}

export default Index
