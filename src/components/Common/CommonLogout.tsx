import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import { apiInstance } from "../../apis/setting"
import { setEmail, setIdx, setNickname, setToken } from "../../store/reducers/logintokenSlice"

export const CommonLogout = async () => {
    const dispatch = useDispatch()
    const router = useRouter()
    try {
        const response = await apiInstance.post('/users/logout')
        if (response.data.logout) {
            dispatch(setToken(''))
            dispatch(setNickname(''))
            dispatch(setEmail(''))
            dispatch(setIdx(0))
            router.replace('/')
            toast.success('로그아웃되었습니다!')
        }
    } catch (e) {
        console.log(e.response)
    }
}