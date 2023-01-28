import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
import { apiInstance } from '../../apis/setting'
<<<<<<< HEAD
import { queryKeys } from '../constants'
=======
>>>>>>> e375213 (Updated : react-query)

export const getServerSidePropsfeedData: GetServerSideProps = async (context) => {
    const { page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.feedData, page], () => useGetFeedData(page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
    }
}

export const getFeedData = (page: any) => apiInstance.get(`/community/page/${page}`, { withCredentials: true })

const useGetFeedData = (page: any) => {
    const queryFn = () => getFeedData(page)
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.feedData, page], queryFn)
}

export default useGetFeedData
