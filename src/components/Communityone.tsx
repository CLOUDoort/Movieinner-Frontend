import { DivContainer, FormContainer } from './Communityone.style'

const handleSubmit = (e) => {
    e.preventDefault()
}

const Communityone = () => {
    return (
        <>
            <DivContainer>
                <p>community</p>
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

export default Communityone
