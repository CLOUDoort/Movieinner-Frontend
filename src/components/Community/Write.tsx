import { DivContainer, DivWriteBox, FormContainer, InputBody } from './Write.style'

const Write = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const body = e.target.body.value
    }

    return (
        <>
            <DivContainer>
                <DivWriteBox>
                    <p>글쓰기</p>
                    <FormContainer onSubmit={handleSubmit}>
                        <div>
                            <input type='text' name='title' placeholder='제목을 입력하세요' />
                        </div>
                        <div>
                            <InputBody type='text' name='body' placeholder='내용을 입력하세요' />
                        </div>
                        <input type='submit' value='작성하기' />
                    </FormContainer>
                </DivWriteBox>
            </DivContainer>
        </>
    )
}

export default Write
