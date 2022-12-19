import { useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import LoadingLogo from "../../Common/Loading/LoadingLogo"
import Signup from "./Signup"
import Signupinfo from "./Signupinfo"
import Signuppw from "./Signuppw"
import SignupVerify from "./SignupVerify"

const SignupLayout = () => {
    const signupComponent = useSelector((state: RootState) => state.signup.component)

    return <>
        {signupComponent === 'Signup' ? <Signup /> : <LoadingLogo />}
        {signupComponent === 'Signuppw' ? <Signuppw /> : <LoadingLogo />}
        {signupComponent === 'Signupinfo' ? <Signupinfo /> : <LoadingLogo />}
        {signupComponent === 'SignupVerify' ? <SignupVerify /> : <LoadingLogo />}
    </>
}

export default SignupLayout