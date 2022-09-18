import { ThemeModalBox, ThemeModalContainer, ThemeModalItemContainer, ThemeModalItem, ThemeModalContent, ThemeCloseBtn } from './Theme.style'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const ThemeModal = (props) => {
    const { showModal, closeModal, modalInfo } = props

    return (
        <>
            {showModal ? (
                <ThemeModalBox onClick={closeModal}>
                    <ThemeModalContainer onClick={(e) => e.stopPropagation()}>
                        {/* 상위 이벤트로의 클릭 이벤트 전파 금지 */}
                        <p>Theme</p>
                        <ThemeModalItemContainer>
                            {modalInfo.map((obj: any) => (
                                <ThemeModalItem key={obj.idx}>
                                    <Link href='/movie'>
                                        <a>
                                            <Image
                                                src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`}
                                                alt={obj.movie_name}
                                                width={180}
                                                height={200}
                                                objectFit='contain'
                                            />
                                        </a>
                                    </Link>
                                    <ThemeModalContent>
                                        <p>
                                            <Link href='/movie'>{obj.movie_name}</Link>
                                        </p>
                                        <p>{obj.release_date}</p>
                                    </ThemeModalContent>
                                </ThemeModalItem>
                            ))}
                            <ThemeCloseBtn onClick={closeModal}>
                                <AiOutlineCloseSquare size={40} />
                            </ThemeCloseBtn>
                        </ThemeModalItemContainer>
                    </ThemeModalContainer>
                </ThemeModalBox>
            ) : null}
        </>
    )
}

export default ThemeModal
