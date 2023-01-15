import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../../setting";


export const getServerSidePropsGenreData: GetServerSideProps = async (context) => {
    const { search, searchPage } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['genreData', search, searchPage], () => useGetGenreData(search, searchPage))
    return {
        props: {
            dyhydrateState: dehydrate(queryClient)
        }
    }
}

export const getGenreData = (search: any, searchPage: any) => apiInstance.get(`/movies/category`, {
    params: {
        search: search,
        searchPage: searchPage
    }
})

const useGetGenreData = (search: any, searchPage: any) => {
    const queryFn = () => getGenreData(search, searchPage)
    return useQuery<AxiosResponse<any>, AxiosError>(['genreData', search, searchPage], queryFn)
}

export default useGetGenreData