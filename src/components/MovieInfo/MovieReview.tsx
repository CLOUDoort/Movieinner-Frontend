import { MovieLikeBtn, MovieBtnContainer, HorizontalRule } from './MovieInfo.style'
import { useState, useEffect } from 'react'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { apiInstance } from '../../apis/setting'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const MovieReview = (props) => {
    const router = useRouter()

    const [like, setLike] = useState(false)
    const { accessToken, info, movieInfo } = props

    useEffect(() => {
        const getResponse = async () => {
            // 로그인 되어 있을 경우
            if (accessToken) {
                // 좋아요 목록 확인
                const checkLiked = await apiInstance.post('movies/liked/movie', { nickname: info.nickname, movieId: info.movieId })
                console.log(checkLiked.data.isExisted)
                if (checkLiked.data.isExisted) {
                    setLike(true)
                }
            }
        }
        getResponse()
    }, [accessToken, info.nickname, info.movieId])

    const clickLikeBtn = async () => {
        // 로그인 되어있을 경우
        if (accessToken) {
            // 이미 좋아요 된 경우에는 삭제
            if (like) {
                try {
                    const deleteResponse = await apiInstance.delete('movies/liked', {
                        data: {
                            type: 'movie',
                            nickname: info.nickname,
                            name: movieInfo.title,
                        },
                    })
                    console.log('delete', deleteResponse.data)
                    toast.success('좋아요 취소!')
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
                        nickname: info.nickname,
                        movieId: info.movieId,
                        name: movieInfo.title,
                        poster_path: movieInfo.poster_path,
                        backdrop_path: movieInfo.backdrop_path,
                    })
                    console.log('like', likeResponse.data)
                    toast.success('좋아요! 마이페이지에 담김')
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
                    <BsFillHandThumbsUpFill size={30} />
                </MovieLikeBtn>
                <button onClick={() => router.push('/community')}>리뷰 쓰기</button>
            </MovieBtnContainer>
            <HorizontalRule />
        </>
    )
}

export default MovieReview
