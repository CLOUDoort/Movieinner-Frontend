import { FormContainer } from './Community.style'

const Write = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const body = e.target.body.value
    }

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <div>
                    <input type='text' name='title' placeholder='제목을 입력하세요' />
                </div>
                <div>
                    <textarea name='body' placeholder='내용을 입력하세요'></textarea>
                </div>
                <input type='submit' value='작성하기' />
            </FormContainer>
        </>
    )
}

export default Write
