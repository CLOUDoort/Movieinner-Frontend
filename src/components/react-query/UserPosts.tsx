import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../../apis/setting";


export const getServerSidePropsUserPosts: GetServerSideProps = async (context) => {
    const { nickname } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['userPosts', nickname], () => useGetUserPosts(nickname))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export const getUserPosts = (nickname: any) => apiInstance.get(`/community`, {
    params: {
        nickname: nickname
    },
    withCredentials: true
})

const useGetUserPosts = (nickname: any) => {
    const queryFn = () => getUserPosts(nickname)
    return useQuery<AxiosResponse<any>, AxiosError>(['userPosts', nickname], queryFn)
}

export default useGetUserPosts
