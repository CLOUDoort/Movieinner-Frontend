import { AxiosError, AxiosResponse } from 'axios'
import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { apiInstance } from '../setting'
export interface PostData {
    userIdx: string | string[]
}

export const getServerSidePropsUserImage: GetServerSideProps = async (context) => {
    const { userIdx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['userImage', userIdx], () => useGetUserImage(userIdx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
export const getUserImage = (userIdx: PostData) => apiInstance.get(`/users/image/${userIdx}`, { withCredentials: true })

const useGetUserImage = (userIdx: any) => {
    const queryFn = () => getUserImage(userIdx)
    return useQuery<AxiosResponse<any>, AxiosError>(['userImage', userIdx], queryFn)
}

export default useGetUserImage
