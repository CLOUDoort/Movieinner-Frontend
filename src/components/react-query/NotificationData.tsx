import { apiInstance } from '../../apis/setting'
import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

export const getServerSidePropsNotiData: GetServerSideProps = async (context) => {
    const { userIdx, notType } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['NotiData', userIdx, notType], () => useGetNotiData(userIdx, notType))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getNotiData = (userIdx: any, notType: any) => apiInstance.get(`/community/notification/${userIdx}`, {
    params: {
        notType: notType
    }, withCredentials: true
})

const useGetNotiData = (userIdx: any, notType: any) => {
    const queryFn = () => getNotiData(userIdx, notType)
    return useQuery<AxiosResponse<any>, AxiosError>(['NotiData', userIdx, notType], queryFn)
}

export default useGetNotiData
