import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef } from 'react'

const WysiwygEditor = () => {
    const editorRef = useRef(null)
    const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']]

    const showContent = () => {
        const editorIns = editorRef.current.getInstance()
        const contentHtml = editorIns.getHTML()
        const contentMark = editorIns.getMarkdown()
        console.log(contentHtml)
        console.log(contentMark)
    }
    return (
        <>
            <Editor
                ref={editorRef}
                initialValue=''
                initialEditType='wysiwyg'
                hideModeSwitch={true}
                height='1000px'
                theme={''}
                usageStatistics={false}
                toolbarItems={toolbarItems}
                plugins={[colorSyntax]}
            />
            <button onClick={showContent}>작성 완료</button>
        </>
    )
}

export default WysiwygEditor
