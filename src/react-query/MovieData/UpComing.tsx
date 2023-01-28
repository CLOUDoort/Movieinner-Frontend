import { AxiosError, AxiosResponse } from "axios";
import { QueryClient, dehydrate, useQuery } from "react-query";

import { GetServerSideProps } from "next";
import { apiInstance } from '../../apis/setting'
import { queryKeys } from "../constants";

export const getServerSidePropsUpComing: GetServerSideProps = async (context) => {
    const { page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.upComing, page], () => useGetUpComing(page))
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
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.upComing, page], queryFn)
}

export default useGetUpComing