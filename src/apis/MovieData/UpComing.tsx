import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../setting";

export const getServerSidePropsUpComing: GetServerSideProps = async (context) => {
    const { page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['upComing', page], () => useGetUpComing(page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export const getUpComing = (page: any) => apiInstance.get(`/movies/upComing/${page}`, {
    withCredentials: true
})

const useGetUpComing = (page: any) => {
    const queryFn = () => getUpComing(page)
    return useQuery<AxiosResponse<any>, AxiosError>(['upComing', page], queryFn)
}

export default useGetUpComing