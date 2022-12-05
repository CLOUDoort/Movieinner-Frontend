import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../../apis/setting";


export const getServerSidePropsUserLiked: GetServerSideProps = async (context) => {
    const { type, nickname } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['userLiked', type, nickname], () => useGetUserLiked(type, nickname))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export const getUserLiked = (type: any, nickname: any) => apiInstance.get(`/movies/liked/${type}`, {
    params: {
        nickname: nickname
    },
    withCredentials: true
})

const useGetUserLiked = (type: any, nickname: any) => {
    const queryFn = () => getUserLiked(type, nickname)
    return useQuery<AxiosResponse<any>, AxiosError>(['userLiked', type, nickname], queryFn)
}

export default useGetUserLiked
