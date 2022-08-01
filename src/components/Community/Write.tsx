import { DivContainer, DivWriteBox, FormContainer, InputBody } from './Write.style'
import Editor from './Editor'

const Write = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const body = e.target.body.value
    }

    return (
        <>
            <Editor />
        </>
    )
}

export default Write
