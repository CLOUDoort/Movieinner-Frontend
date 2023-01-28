import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
import { apiInstance } from '../../apis/setting'
<<<<<<< HEAD
import { queryKeys } from '../constants'

=======
>>>>>>> e375213 (Updated : react-query)
export interface PostData {
    idx: string | string[]
}

export const getServerSidePropsPostData: GetServerSideProps = async (context) => {
    const { idx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.postData, idx], () => useGetPostData(idx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getPostData = (idx: PostData) => apiInstance.get(`/community/content/user/${idx}`, { withCredentials: true })

const useGetPostData = (idx: any) => {
    const queryFn = () => getPostData(idx)
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.postData, idx], queryFn)
}

export default useGetPostData
