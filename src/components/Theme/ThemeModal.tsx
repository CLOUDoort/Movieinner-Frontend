import { ThemeModalBox, ThemeModalContainer, ThemeModalItemContainer, ThemeModalItem, ThemeModalContent, ThemeCloseBtn, ThemeLikeBtn } from './Theme.style'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillCloseSquare } from 'react-icons/ai'
import ThemeLike from './ThemeLike'

const ThemeModal = (props) => {
    const { showModal, closeModal, modalInfo } = props
    return (
        <>
            {showModal ? (
                <ThemeModalBox onClick={closeModal}>
                    <ThemeModalContainer onClick={(e) => e.stopPropagation()}>
                        {/* 상위 이벤트로의 클릭 이벤트 전파 금지 */}
                        <p>{modalInfo[0].theme_name}</p>
                        <ThemeModalItemContainer>
                            {modalInfo.map((obj: any) => (
                                <ThemeModalItem key={obj.movie_id}>
                                    <Link href={`/movie/${obj.movie_id}`}>
                                        <a>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
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
                            <ThemeLike modalInfo={modalInfo} />
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
