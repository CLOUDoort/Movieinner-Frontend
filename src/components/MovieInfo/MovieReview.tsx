import { useState, useEffect } from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { apiInstance } from '../../apis/setting'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { HorizontalRule, MovieBtnContainer, MovieLikeBtn } from './MovieInfoText.style'

const MovieReview = (props) => {
    const [like, setLike] = useState(false)
    const { accessToken, movieId, movieInfo } = props
    const userIdx = useSelector((state: RootState) => state.idx.idx)

    useEffect(() => {
        const getResponse = async () => {
            // 로그인 되어 있을 경우
            if (accessToken) {
                // 좋아요 목록 확인
                const checkLiked = await apiInstance.post('movies/liked/movie', { userIdx: userIdx, movieId: movieId })
                console.log(checkLiked.data.isExisted)
                if (checkLiked.data.isExisted) {
                    setLike(true)
                }
            }
        }
        getResponse()
    }, [accessToken, userIdx, movieId])

    const clickLikeBtn = async () => {
        // 로그인 되어있을 경우
        if (accessToken) {
            // 이미 좋아요 된 경우에는 삭제
            if (like) {
                try {
                    const deleteResponse = await apiInstance.delete('movies/liked', {
                        data: {
                            type: 'movie',
                            userIdx: userIdx,
                            name: movieInfo.title,
                        },
                    })
                    setLike(false)
                } catch (e) {
                    console.error(e.response)
                }
            }
            // 좋아요 안 된 경우는 좋아요 추가
            else {
                try {
                    const likeResponse = await apiInstance.post('movies/liked', {
                        type: 'movie',
                        userIdx: userIdx,
                        movieId: movieId,
                        name: movieInfo.title,
                        poster_path: movieInfo.poster_path,
                        backdrop_path: movieInfo.backdrop_path,
                    })
                    setLike(true)
                } catch (e) {
                    console.error(e.response)
                }
            }
        } else {
            toast.error('로그인을 해주세요!')
        }
    }

    return (
        <>
            <MovieBtnContainer>
                <MovieLikeBtn like={like} onClick={clickLikeBtn}>
                    <BsFillHandThumbsUpFill size={45} />
                </MovieLikeBtn>
            </MovieBtnContainer>
            <HorizontalRule />
        </>
    )
}

export default MovieReview
