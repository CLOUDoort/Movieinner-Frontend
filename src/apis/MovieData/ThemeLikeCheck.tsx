import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../setting";


export const getServerSidePropsThemeLikeCheck: GetServerSideProps = async (context) => {
    const { type, userIdx, name } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['ThemeLikeCheck', type, userIdx, name], () => useGetThemeLikeCheck(type, userIdx, name))
    return {
        props: {
            dyhydrateState: dehydrate(queryClient)
        }
    }
}

export const getThemeLikeCheck = (type: any, userIdx: any, name: any) => apiInstance.post(`movies/liked/${type}`, {
    userIdx: userIdx,
    name: name
})


const useGetThemeLikeCheck = (type: any, userIdx: any, name: any) => {
    const queryFn = () => getThemeLikeCheck(type, userIdx, name)
    return useQuery<AxiosResponse<any>, AxiosError>(['ThemeLikeCheck', type, userIdx, name], queryFn)
}

export default useGetThemeLikeCheck