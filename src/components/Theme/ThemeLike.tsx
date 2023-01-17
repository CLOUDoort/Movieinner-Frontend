import { apiInstance } from '../../apis/setting'
import { toast } from 'react-toastify'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { ThemeLikeBtn } from './ThemeModal.style'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import useGetThemeLikeCheck from '../../apis/MovieData/ThemeLikeCheck'

const ThemeLike = (props) => {
    const accessToken = useSelector((state: RootState) => state.token.token)
    const userIdx = useSelector((state: RootState) => state.idx.idx)
    const { modalInfo } = props
    const themeLikeState = useGetThemeLikeCheck('theme', userIdx, modalInfo[0].theme_name).data
    const [like, setLike] = useState(false)
    useEffect(() => {
        if (themeLikeState?.data?.isExisted) setLike(true)
        else setLike(false)
    }, [])

    const clickLikeBtn = async () => {
        if (accessToken) {
            // 좋아요 삭제
            if (like) {
                try {
                    const deleteResponse = await apiInstance.delete('movies/liked', {
                        data: {
                            type: 'theme',
                            userIdx: userIdx,
                            movieId: modalInfo[0].movie_id,
                        },
                    })
                    setLike(false)
                    console.log('삭제', deleteResponse.data)
                } catch (e) {
                    console.error(e.response)
                }
            } else {
                // 좋아요 추가
                try {
                    const clickLikeResponse = await apiInstance.post('movies/liked', {
                        type: 'theme',
                        userIdx: userIdx,
                        name: modalInfo[0].theme_name,
                        poster_path: modalInfo[0].poster_path,
                    })
                    setLike(true)
                    console.log('추가', clickLikeResponse.data)
                } catch (e) {
                    console.error(e.response)
                }
            }
        } else {
            toast.error('로그인 해주세요!')
        }
    }

    return (
        <ThemeLikeBtn like={like} onClick={clickLikeBtn}>
            <BsFillHandThumbsUpFill size={30} />
        </ThemeLikeBtn>
    )
}

export default ThemeLike
