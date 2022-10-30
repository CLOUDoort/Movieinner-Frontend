import { apiInstance } from '../../apis/setting'
export interface PostData {
    idx: string | string[]
}

export const getPostData = (idx: PostData) => apiInstance.get(`/community`)
