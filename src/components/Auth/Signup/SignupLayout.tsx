import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import Signup from "./Signup"
import Signupinfo from "./Signupinfo"
import Signuppw from "./Signuppw"
import SignupVerify from "./SignupVerify"

const SignupLayout = () => {
    const signupComponent = useSelector((state: RootState) => state.signup.component)
    const dispatch = useDispatch()

    return <>
        {signupComponent === 'Signup' && <Signup dispatch={dispatch} />}
        {signupComponent === 'Signuppw' && <Signuppw dispatch={dispatch} />}
        {signupComponent === 'Signupinfo' && <Signupinfo dispatch={dispatch} />}
        {signupComponent === 'SignupVerify' && <SignupVerify />}
    </>
}

export default SignupLayout