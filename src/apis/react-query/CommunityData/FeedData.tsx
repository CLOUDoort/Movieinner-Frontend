import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'
import { apiInstance } from '../../setting'

export interface FeedPage {
    page: string | string[] | number
}

export const getServerSidePropsfeedData: GetServerSideProps = async (context) => {
    const { page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['feedData', page], () => useGetFeedData(page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getFeedData = (page: any) => apiInstance.get(`/community/page/${page}`, { withCredentials: true })

const useGetFeedData = (page: any) => {
    const queryFn = () => getFeedData(page)
    return useQuery<AxiosResponse<any>, AxiosError>(['feedData', page], queryFn)
}

export default useGetFeedData
