import Link from 'next/link'
import { DivContainer, FormContainer } from './Message.style'

const handleSubmit = (e) => {
    e.preventDefault()
}

const Message = () => {
    return (
        <>
            <header>
                <div>
                    <Link href='/'>MovieInner</Link>
                </div>
                <div>
                    <Link href='/'>로그인</Link>
                    <Link href='/'>회원가입</Link>
                </div>
            </header>
            <DivContainer>
                <FormContainer onSubmit={handleSubmit}>
                    <div>
                        <input type='text' name='title' placeholder='제목을 입력하세요' />
                    </div>
                    <div>
                        <textarea name='body' placeholder='내용을 입력하세요'></textarea>
                    </div>
                    <input type='submit' value='작성하기' />
                </FormContainer>
                <hr></hr>
            </DivContainer>
        </>
    )
}

export default Message
