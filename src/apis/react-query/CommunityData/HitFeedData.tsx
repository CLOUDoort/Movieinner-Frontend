import { apiInstance } from '../../setting'
import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

export const getServerSidePropsHitFeed: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['hitFeed'], () => useGetHitFeed())
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getHitFeed = () => apiInstance.get(`/community/content/hit`, { withCredentials: true })

const useGetHitFeed = () => {
    const queryFn = () => getHitFeed()
    return useQuery<AxiosResponse<any>, AxiosError>(['hitFeed'], queryFn)
}

export default useGetHitFeed
