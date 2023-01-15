import { AxiosError, AxiosResponse } from "axios";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { apiInstance } from "../../setting";


export const getServerSidePropsActorSearch: GetServerSideProps = async (context) => {
    const { search, page } = context.query as any
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['actorSearch', search, page], () => useGetActorSearch(search, page))
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
}

export const getActorSearch = (search: any, page: any) => apiInstance.get(`/search/actor`, {
    params: {
        search: search,
        page: page
    },
    withCredentials: true
})

const useGetActorSearch = (search: any, page: any) => {
    const queryFn = () => getActorSearch(search, page)
    return useQuery<AxiosResponse<any>, AxiosError>(['actorSearch', search, page], queryFn)
}

export default useGetActorSearch