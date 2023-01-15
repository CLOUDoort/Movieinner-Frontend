import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../../setting";


export const getServerSidePropsUserLiked: GetServerSideProps = async (context) => {
    const { type, userIdx } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['userLiked', type, userIdx], () => useGetUserLiked(type, userIdx))
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
    return useQuery<AxiosResponse<any>, AxiosError>(['userLiked', type, userIdx], queryFn)
}

export default useGetUserLiked
