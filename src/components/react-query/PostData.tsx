import { AxiosError, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { apiInstance } from '../../apis/setting'
export interface PostData {
    idx: string | string[]
}

export const getServerSidePropsPostData: GetServerSideProps = async (context) => {
    const { idx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['postData', idx], () => useGetPostData(idx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getPostData = (idx: PostData) => apiInstance.get(`/community/content/user/${idx}`, { withCredentials: true })

const useGetPostData = (idx: any) => {
    const queryFn = () => getPostData(idx)
    return useQuery<AxiosResponse<any>, AxiosError>(['postData', idx], queryFn)
}

export default useGetPostData
