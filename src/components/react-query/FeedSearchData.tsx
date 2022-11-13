import { apiInstance } from '../../apis/setting'
import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

export const getServerSidePropsFeedSearchData: GetServerSideProps = async (context) => {
    const { menu, search, page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['feedSearchData', menu, search, page], () => useGetFeedSearchData(menu, search, page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getFeedSearchData = (menu: string, search: string, page: any) =>
    apiInstance.get(`/content/search/${menu}/${search}/${page}`, { withCredentials: true })

const useGetFeedSearchData = (menu: string, search: string, page: any) => {
    const queryFn = () => getFeedSearchData(menu, search, page)
    return useQuery<AxiosResponse<any>, AxiosError>(['feedSearchData', menu, search, page], queryFn)
}

export default useGetFeedSearchData
