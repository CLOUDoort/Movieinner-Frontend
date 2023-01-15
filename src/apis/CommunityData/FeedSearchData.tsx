import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'
import { apiInstance } from '../setting'

export const getServerSidePropsFeedSearchData: GetServerSideProps = async (context) => {
    const { type, search, page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['feedSearchData', type, search, page], () => useGetFeedSearchData(type, search, page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getFeedSearchData = (type: string, search: string, page: any) =>
    apiInstance.get(`/search/content/${type}`, {
        params: {
            search: search,
            page: page,
        },
        withCredentials: true,
    })

const useGetFeedSearchData = (type: any, search: any, page: any) => {
    const queryFn = () => getFeedSearchData(type, search, page)
    return useQuery<AxiosResponse<any>, AxiosError>(['feedSearchData', type, search, page], queryFn)
}

export default useGetFeedSearchData
