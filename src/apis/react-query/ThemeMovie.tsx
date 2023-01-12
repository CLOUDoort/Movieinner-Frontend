import { apiInstance } from '../setting'
import { AxiosResponse, AxiosError } from 'axios'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { GetServerSideProps } from 'next'

export const getServerSidePropsThemeMovie: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['themeMovie'], () => useGetThemeMovie())
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export const getThemeMovie = () => apiInstance.get(`/movies/theme`, { withCredentials: true })

const useGetThemeMovie = () => {
    const queryFn = () => getThemeMovie()
    return useQuery<AxiosResponse<any>, AxiosError>(['themeMovie'], queryFn)
}

export default useGetThemeMovie
