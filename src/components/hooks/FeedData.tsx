import { apiInstance } from '../../apis/setting'
import { AxiosResponse, AxiosError } from 'axios'
import { useQuery } from 'react-query'

export interface FeedPage {
    page: string | string[] | number
}

export const getFeedData = (page: any) => apiInstance.get(`/community/page/${page}`, { withCredentials: true })

const useGetFeedData = (page: any) => {
    const queryFn = () => getFeedData(page)
    return useQuery<AxiosResponse<any>, AxiosError>(['feedData', page], queryFn)
}

export default useGetFeedData
