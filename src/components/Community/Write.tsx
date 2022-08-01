import TiptapEditor from './TiptapEditor'

const Write = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target.title.value
        const body = e.target.body.value
    }

    return (
        <>
            <TiptapEditor />
        </>
    )
}

export default Write
