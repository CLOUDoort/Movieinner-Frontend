import Footer from './Footer/Footer'
import Header from './Header/Header'
import { DivContainer, FormContainer } from './Community.style'

const handleSubmit = (e) => {
    e.preventDefault()
}

const Community = () => {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    )
}

export default Community
