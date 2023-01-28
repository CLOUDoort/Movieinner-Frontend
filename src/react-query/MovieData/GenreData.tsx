import { apiInstance } from '../../apis/setting'
import { queryKeys } from '../constants';
import { useInfiniteQuery } from "react-query";

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
    return useInfiniteQuery([queryKeys.genreData, (search)], ({ pageParam = 1 }) => queryFn(search, pageParam), {
        getNextPageParam: (lastPage) => lastPage.searchPage + 1 || undefined
    })
}

export default useGetGenreData