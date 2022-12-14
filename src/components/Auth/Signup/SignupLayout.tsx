import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import Signup from "./Signup"
import Signupinfo from "./Signupinfo"
import Signuppw from "./Signuppw"
import SignupVerify from "./SignupVerify"

const SignupLayout = () => {
    const signupComponent = useSelector((state: RootState) => state.signup.component)

    return <>
        {signupComponent === 'Signup' && <Signup />}
        {signupComponent === 'Signuppw' && <Signuppw />}
        {signupComponent === 'Signupinfo' && <Signupinfo />}
        {signupComponent === 'SignupVerify' && <SignupVerify />}
    </>
}

export default SignupLayout