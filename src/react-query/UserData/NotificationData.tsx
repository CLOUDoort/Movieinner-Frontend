import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
import { apiInstance } from '../../apis/setting'
<<<<<<< HEAD
import { queryKeys } from '../constants'
=======
>>>>>>> e375213 (Updated : react-query)

export const getServerSidePropsNotiData: GetServerSideProps = async (context) => {
    const { userIdx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.NotiData, userIdx], () => useGetNotiData(userIdx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getNotiData = (userIdx: any) => apiInstance.get(`/community/notification/${userIdx}`, {
    withCredentials: true
})

const useGetNotiData = (userIdx: any) => {
    const queryFn = () => getNotiData(userIdx,)
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.NotiData, userIdx,], queryFn)
}

export default useGetNotiData
