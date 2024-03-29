import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
import { apiInstance } from '../../apis/setting'
import { queryKeys } from '../constants'

export interface PostData {
    userIdx: string | string[]
}

export const getServerSidePropsUserImage: GetServerSideProps = async (context) => {
    const { userIdx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.userImage, userIdx], () => useGetUserImage(userIdx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}
export const getUserImage = (userIdx: PostData) => apiInstance.get(`/users/image/${userIdx}`, { withCredentials: true })

const useGetUserImage = (userIdx: any) => {
    const queryFn = () => getUserImage(userIdx)
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.userImage, userIdx], queryFn)
}

export default useGetUserImage
