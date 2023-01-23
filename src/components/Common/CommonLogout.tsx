import { apiInstance } from "../../apis/setting"

export const CommonLogout = async () => {
    try {
        const response = await apiInstance.post('/users/logout')
        if (response.data.logout) return true
    } catch (e) {
        console.log(e.response)
    }
}
