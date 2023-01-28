import { AxiosError, AxiosResponse } from "axios";
import { QueryClient, dehydrate, useQuery } from "react-query";

import { GetServerSideProps } from "next";
import { apiInstance } from "../../apis/setting";
import { queryKeys } from "../constants";

export const getServerSidePropsUserLiked: GetServerSideProps = async (context) => {
    const { type, userIdx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery([queryKeys.userLiked, type, userIdx], () => useGetUserLiked(type, userIdx))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export const getUserLiked = (type: any, userIdx: any) => apiInstance.get(`/movies/liked/${type}`, {
    params: {
        userIdx: userIdx
    },
    withCredentials: true
})

const useGetUserLiked = (type: any, userIdx: any) => {
    const queryFn = () => getUserLiked(type, userIdx)
    return useQuery<AxiosResponse<any>, AxiosError>([queryKeys.userLiked, type, userIdx], queryFn)
}

export default useGetUserLiked
