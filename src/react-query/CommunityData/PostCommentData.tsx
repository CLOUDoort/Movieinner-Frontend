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

export const getServerSidePropsPostCommentData: GetServerSideProps = async (context) => {
    const { idx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.postCommentData, idx], () => useGetPostCommentData(idx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
export const getPostCommentData = (idx: PostData) => apiInstance.get(`/community/comment/${idx}`, { withCredentials: true })

const useGetPostCommentData = (idx: any) => {
    const queryFn = () => getPostCommentData(idx)
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.postCommentData, idx], queryFn)
}

export default useGetPostCommentData
