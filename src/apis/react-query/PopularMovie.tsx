import { apiInstance } from '../setting'
import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

export const getServerSidePropsPopularMovie: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['popularMovie'], () => useGetPopularMovie())
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getPopularMovie = () => apiInstance.get(`/movies/popular`, { withCredentials: true })

const useGetPopularMovie = () => {
    const queryFn = () => getPopularMovie()
    return useQuery<AxiosResponse<any>, AxiosError>(['popularMovie'], queryFn)
}

export default useGetPopularMovie
