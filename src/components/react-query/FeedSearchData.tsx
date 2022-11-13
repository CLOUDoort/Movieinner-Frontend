import { apiInstance } from '../../apis/setting'
import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

export interface FeedPage {
    page: string | string[] | number
}

export const getServerSidePropsFeedSearchData: GetServerSideProps = async (context) => {
    const { page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['feedSearchData', page], () => useGetFeedSearchData(page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getFeedSearchData = (page: any) => apiInstance.get(`/content/search`, { withCredentials: true })

const useGetFeedSearchData = (page: any) => {
    const queryFn = () => getFeedSearchData(page)
    return useQuery<AxiosResponse<any>, AxiosError>(['feedSearchData', page], queryFn)
}

export default useGetFeedSearchData
