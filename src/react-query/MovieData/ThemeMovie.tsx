import { AxiosError, AxiosResponse } from 'axios'
import { QueryClient, dehydrate, useQuery } from 'react-query'

import { GetServerSideProps } from 'next'
import { apiInstance } from '../../apis/setting'
import { queryKeys } from '../constants'

export const getServerSidePropsThemeMovie: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.themeMovie], () => useGetThemeMovie())
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getThemeMovie = () => apiInstance.get(`/movies/theme`, { withCredentials: true })

const useGetThemeMovie = () => {
    const queryFn = () => getThemeMovie()
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.themeMovie], queryFn)
}

export default useGetThemeMovie
