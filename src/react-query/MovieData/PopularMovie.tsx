import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
<<<<<<< HEAD
import { QueryKey } from 'react-query';
import { apiInstance } from '../../apis/setting'
import { queryKeys } from '../constants';
=======
import { apiInstance } from '../../apis/setting'
>>>>>>> e375213 (Updated : react-query)

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
