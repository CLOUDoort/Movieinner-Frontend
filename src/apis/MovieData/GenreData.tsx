import { useInfiniteQuery } from "react-query";
import { apiInstance } from "../setting";

export const getGenreData = (search: any, searchPage: any) => apiInstance.get(`/movies/category`, {
    params: {
        search: search,
        searchPage: searchPage
    }
})

const useGetGenreData = (search: any) => {
    const queryFn = async (search: any, searchPage: any) => {
        const response = await getGenreData(search, searchPage)
        const { data } = response
        return { data, searchPage: searchPage }
    }
    return useInfiniteQuery(['genreData', (search)], ({ pageParam = 1 }) => queryFn(search, pageParam), {
        getNextPageParam: (lastPage) => lastPage.searchPage + 1 || undefined
    })
}

export default useGetGenreData