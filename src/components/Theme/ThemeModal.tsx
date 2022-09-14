import { useState } from 'react'
import { ThemeModalBox, ThemeModalContainer, ThemeModalItemContainer, ThemeModalItem, ThemeModalContent, ThemeCloseBtn } from './Theme.style'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineCloseSquare } from 'react-icons/ai'

const ThemeModal = (props) => {
    const [image, setImage] = useState('')
    const { showModal } = props

    const closeModal = () => {
        props.closeModal()
    }

    return (
        <>
            {showModal ? (
                <ThemeModalBox onClick={closeModal}>
                    <ThemeModalContainer onClick={(e) => e.stopPropagation()}>
                        {/* 상위 이벤트로의 클릭 이벤트 전파 금지 */}
                        <div>Theme</div>
                        <ThemeModalItemContainer>
                            <ThemeModalItem>
                                <Link href='/movie'>
                                    <Image src='/blackphone.jpeg' alt='이미지' width={180} height={200} />
                                </Link>
                                <ThemeModalContent>
                                    <p>
                                        <Link href='/movie'>영화제목</Link>
                                    </p>
                                    <p>개봉일</p>
                                </ThemeModalContent>
                            </ThemeModalItem>
                            <ThemeModalItem>
                                <Link href='/movie'>
                                    <Image src='/blackphone.jpeg' alt='이미지' width={180} height={200} />
                                </Link>
                                <ThemeModalContent>
                                    <p>
                                        <Link href='/movie'>영화제목</Link>
                                    </p>
                                    <p>개봉일</p>
                                </ThemeModalContent>
                            </ThemeModalItem>
                            <ThemeModalItem>
                                <Link href='/movie'>
                                    <Image src='/blackphone.jpeg' alt='이미지' width={180} height={200} />
                                </Link>
                                <ThemeModalContent>
                                    <p>
                                        <Link href='/movie'>영화제목</Link>
                                    </p>
                                    <p>개봉일</p>
                                </ThemeModalContent>
                            </ThemeModalItem>
                            <ThemeModalItem>
                                <Link href='/movie'>
                                    <Image src='/blackphone.jpeg' alt='이미지' width={180} height={200} />
                                </Link>
                                <ThemeModalContent>
                                    <p>
                                        <Link href='/movie'>영화제목</Link>
                                    </p>
                                    <p>개봉일</p>
                                </ThemeModalContent>
                            </ThemeModalItem>
                            <ThemeModalItem>
                                <Link href='/movie'>
                                    <Image src='/blackphone.jpeg' alt='이미지' width={180} height={200} />
                                </Link>
                                <ThemeModalContent>
                                    <p>
                                        <Link href='/movie'>영화제목</Link>
                                    </p>
                                    <p>개봉일</p>
                                </ThemeModalContent>
                            </ThemeModalItem>
                            <ThemeModalItem>
                                <Link href='/movie'>
                                    <Image src='/blackphone.jpeg' alt='이미지' width={180} height={200} />
                                </Link>
                                <ThemeModalContent>
                                    <p>
                                        <Link href='/movie'>영화제목</Link>
                                    </p>
                                    <p>개봉일</p>
                                </ThemeModalContent>
                            </ThemeModalItem>
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
