import { ThemeModalBox, ThemeModalContainer, ThemeModalItemContainer, ThemeModalItem, ThemeModalContent, ThemeCloseBtn, ThemeLikeBtn } from './Theme.style'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCloseSquare } from 'react-icons/ai'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'
import { apiInstance } from '../../apis/setting'
import { toast } from 'react-toastify'
import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const ThemeModal = (props) => {
    const { showModal, closeModal, modalInfo } = props
    const accessToken = useSelector((state: RootState) => state.token.token)
    const [nickname, setNickname] = useState('')
    useEffect(() => {
        const getCheckResponse = async () => {
            try {
                const tokenResponse = await apiInstance.post('auth/verify', {
                    token: accessToken,
                })
                const nicknameResponse = tokenResponse.data.payload.nickname
                setNickname(nicknameResponse)
            } catch (e) {
                console.log(e.response)
            }
        }
        getCheckResponse()
    }, [accessToken])

    const clickLikedBtn = async () => {
        try {
            if (accessToken) {
                // const clickLikeResponse = await apiInstance.post('/movies/like', {
                //     type: 'theme',
                //     nickname: nickname,
                //     movieId: modalInfo.movie_id,
                //     name: modalInfo.
                // })
            }
        } catch (e) {
            console.log(e.response)
        }
        toast.success('like!')
    }
    return (
        <>
            {showModal ? (
                <ThemeModalBox onClick={closeModal}>
                    <ThemeModalContainer onClick={(e) => e.stopPropagation()}>
                        {/* 상위 이벤트로의 클릭 이벤트 전파 금지 */}
                        <p>Theme</p>
                        <ThemeModalItemContainer>
                            {modalInfo.map((obj: any) => (
                                <ThemeModalItem key={obj.movie_id}>
                                    <Link href={`/movie/${obj.movie_id}`}>
                                        <a>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                                                alt={obj.movie_name}
                                                id={obj.movie_name}
                                                width={180}
                                                height={200}
                                                objectFit='contain'
                                            />
                                        </a>
                                    </Link>
                                    <ThemeModalContent>
                                        <p>
                                            <Link href={`/movie/${obj.movie_id}`}>{obj.movie_name}</Link>
                                        </p>
                                        <p>{obj.release_date}</p>
                                    </ThemeModalContent>
                                </ThemeModalItem>
                            ))}
                            <ThemeLikeBtn onClick={clickLikedBtn}>
                                <BsFillHandThumbsUpFill size={30} />
                            </ThemeLikeBtn>
                            <ThemeCloseBtn onClick={closeModal}>
                                <AiFillCloseSquare size={35} />
                            </ThemeCloseBtn>
                        </ThemeModalItemContainer>
                    </ThemeModalContainer>
                </ThemeModalBox>
            ) : null}
        </>
    )
}

export default ThemeModal
