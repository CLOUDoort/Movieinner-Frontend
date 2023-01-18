import { useInfiniteQuery } from "react-query";
import { apiInstance } from "../setting";


export const getActorSearch = (search: any, searchPage: any) => apiInstance.get(`/search/actor`, {
    params: {
        search: search,
        searchPage: searchPage
    },
    withCredentials: true
})

const useGetActorSearch = (search: any) => {
    const queryFn = async (search: any, searchPage: any) => {
        const response = await getActorSearch(search, searchPage)
        const { data } = response
        return { data, searchPage: searchPage }
    }
    return useInfiniteQuery(['actorSearch', (search)], ({ pageParam = 1 }) => queryFn(search, pageParam), {
        getNextPageParam: (lastPage) => lastPage.searchPage + 1 || undefined
    })
}

export default useGetActorSearch