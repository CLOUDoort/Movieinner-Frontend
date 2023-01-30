import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
import { apiInstance } from '../../apis/setting'
import { queryKeys } from '../constants';

export const getServerSidePropsPopularMovie: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.movieSearch], () => useGetPopularMovie())
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getPopularMovie = () => apiInstance.get(`/movies/popular`, { withCredentials: true })

const useGetPopularMovie = () => {
    const queryFn = () => getPopularMovie()
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.movieSearch], queryFn)
}

export default useGetPopularMovie
