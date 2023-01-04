import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import SignupEmail from "./SignupEmail"
import Signupinfo from "./Signupinfo"
import Signuppw from "./Signuppw"
import SignupVerify from "./SignupVerify"

const Signup = () => {
    const signupComponent = useSelector((state: RootState) => state.signup.component)
    const dispatch = useDispatch()

    return <>
        {signupComponent === 'SignupEmail' && <SignupEmail dispatch={dispatch} />}
        {signupComponent === 'Signuppw' && <Signuppw dispatch={dispatch} />}
        {signupComponent === 'Signupinfo' && <Signupinfo />}
        {signupComponent === 'SignupVerify' && <SignupVerify />}
    </>
}

export default Signup