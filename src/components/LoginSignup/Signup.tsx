import { useState } from 'react'
import { toast } from 'react-toastify'
import { apiInstance } from '../../apis/setting'
import CurrentStatusFirst from './CurrentStatus/CurrentStatusFirst'
import { EmailForm, ProgressBtn, SignupContainerDiv } from './Signup_pw.style'

const Signup = () => {
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        const { value } = e.target
        setEmail(value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(email)
        await apiInstance
            .post('/verify', { email: email })
            .then(() => toast.success('post success'))
            .catch(() => {
                toast.error('post fail')
            })

        await apiInstance.post('/signup', email)
    }
    return (
        <>
            <SignupContainerDiv>
                <CurrentStatusFirst />
                <div>회원 이메일 인증</div>
                <EmailForm onSubmit={handleSubmit}>
                    <div>Email</div>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        placeholder='이메일을 입력해주세요'
                        onChange={handleChange}
                    />
                    <input
                        className='submitBtn'
                        type='submit'
                        value='인증메일 발송'
                    />
                </EmailForm>
                <div>
                    <ProgressBtn>계속하기</ProgressBtn>
                </div>
            </SignupContainerDiv>
        </>
    )
}

export default Signup
