import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../../setting";


export const getServerSidePropsMovieSearch: GetServerSideProps = async (context) => {
    const { search, page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['movieSearch', search, page], () => useGetMovieSearch(search, page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export const getMovieSearch = (search: any, page: any) => apiInstance.get(`/search/movie`, {
    params: {
        search: search,
        page: page
    },
    withCredentials: true
})

const useGetMovieSearch = (search: any, page: any) => {
    const queryFn = () => getMovieSearch(search, page)
    return useQuery<AxiosResponse<any>, AxiosError>(['movieSearch', search, page], queryFn)
}

export default useGetMovieSearch
