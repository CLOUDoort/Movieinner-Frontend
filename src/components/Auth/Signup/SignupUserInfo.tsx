import { UserInfoContainer, UserSex } from "./Signupinfo.style"
import SignupUserBirth from "./SignupUserBirth"

const SignupUserInfo = (props) => {
    const { handleChange, setUserBirth, info, dispatch } = props

    return (
        <UserInfoContainer>
            <div>이름</div>
            <input type='text' name='name' value={info.name} placeholder='이름을 입력하세요' onChange={handleChange} autoComplete='off' />
            <div>성별</div>
            <UserSex>
                <label>
                    남성
                    <input type='radio' value='남성' name='gender' onChange={handleChange} checked={info.gender === '남성'} />
                </label>
                <label>
                    여성
                    <input type='radio' value='여성' name='gender' onChange={handleChange} checked={info.gender === '여성'} />
                </label>
            </UserSex>
            <SignupUserBirth dispatch={dispatch} setUserBirth={setUserBirth} />
        </UserInfoContainer>
    )
}

export default SignupUserInfo