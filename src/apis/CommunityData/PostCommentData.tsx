import { AxiosError, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { apiInstance } from '../setting'
export interface PostData {
    idx: string | string[]
}

export const getServerSidePropsPostCommentData: GetServerSideProps = async (context) => {
    const { idx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['postCommentData', idx], () => useGetPostCommentData(idx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
export const getPostCommentData = (idx: PostData) => apiInstance.get(`/community/comment/${idx}`, { withCredentials: true })

const useGetPostCommentData = (idx: any) => {
    const queryFn = () => getPostCommentData(idx)
    return useQuery<AxiosResponse<any>, AxiosError>(['postCommentData', idx], queryFn)
}

export default useGetPostCommentData
