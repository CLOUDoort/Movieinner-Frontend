import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import Loading from '../../Loading'
import SignupVerifyFail from './SignupVerifyFail'

const SignupVerifyReturn = () => {
    const router = useRouter()
    const { email, key } = router.query
    const [verification, setVerification] = useState({
        success: false,
        isVerified: false,
    })

    //라우터 필드가 클라이언트 측에서 업데이트되고 사용할 준비가 되었는지 여부.
    //useEffect 메소드 내에서만 사용해야하며 서버에서 조건부로 렌더링 하는 데에 사용해야한다.
    useEffect(() => {
        if (!router.isReady) return
        else {
            const getRequest = async () => {
                try {
                    const response = await apiInstance.get('/verify', { params: { key: key } })
                    setVerification({
                        success: true, // router query가 담긴 링크 받고 접속 성공
                        isVerified: response.data.isVerified, // 시간 내에 접속 성공
                    })
                } catch (e) {
                    console.log(e)
                    setVerification({
                        success: true,
                        isVerified: false, // 링크 접속은 했으나 시간 제한 걸림 => 백으로부터 return 못 받음
                    })
                }
            }
            getRequest()
        }
    }, [key, router.isReady])

    if (verification.isVerified) router.replace('/welcome')

    return <>{!verification.success ? <Loading /> : <SignupVerifyFail email={email} />}</>
}

export default SignupVerifyReturn
