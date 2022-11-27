import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../../apis/setting";

export interface GenreData {
    id: string | string[]
}

export const getServerSidePropsGenreData: GetServerSideProps = async (context) => {
    const { id } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['genreData', id], () => useGetGenreData(id))
    return {
        props: {
            dyhydrateState: dehydrate(queryClient)
        }
    }
}

export const getGenreData = (id: GenreData) => apiInstance.get(`/movies/category`, {
    params: {
        id: id
    }
})

const useGetGenreData = (id: any) => {
    const queryFn = () => getGenreData(id)
    return useQuery<AxiosResponse<any>, AxiosError>(['genreData', id], queryFn)
}

export default useGetGenreData