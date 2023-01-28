import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
import { apiInstance } from '../../apis/setting'
import { queryKeys } from '../constants'

export const getServerSidePropsHitFeed: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.hitFeed], () => useGetHitFeed())
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getHitFeed = () => apiInstance.get(`/community/content/hit`, { withCredentials: true })

const useGetHitFeed = () => {
    const queryFn = () => getHitFeed()
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.hitFeed], queryFn)
}

export default useGetHitFeed
