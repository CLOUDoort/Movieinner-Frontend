import { useInfiniteQuery } from "react-query";
import { apiInstance } from "../setting";


export const getMovieSearch = (search: any, searchPage: any) => apiInstance.get(`/search/movie`, {
    params: {
        search: search,
        searchPage: searchPage
    },
    withCredentials: true
})

const useGetMovieSearch = (search: any) => {
    const queryFn = async (search: any, searchPage: any) => {
        const response = await getMovieSearch(search, searchPage)
        const { data } = response
        return { data, searchPage: searchPage }
    }

    return useInfiniteQuery(['movieSearch', (search)], ({ pageParam = 1 }) => queryFn(search, pageParam), {
        getNextPageParam: (lastPage) => lastPage.searchPage + 1 || undefined
    })
}

export default useGetMovieSearch
