import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef } from 'react'
import { WriteContainer, WriteTitle } from './Write.style'

const WysiwygEditor = () => {
    const editorRef = useRef(null)
    const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']]

    const showContent = () => {
        const editorIns = editorRef.current.getInstance()
        const contentHtml = editorIns.getHTML()
        const contentMark = editorIns.getMarkdown()
        console.log('html', contentHtml)
        console.log('mark', contentMark)
    }
    return (
        <WriteContainer>
            <WriteTitle type='text' placeholder='제목 입력하세요' />
            <Editor
                ref={editorRef}
                initialValue=''
                placeholder='글을 작성해주세요!'
                initialEditType='wysiwyg'
                hideModeSwitch={true}
                height='1000px'
                theme={'dark'}
                usageStatistics={false} // GA 비활성화
                toolbarItems={toolbarItems}
                plugins={[colorSyntax]}
            />
            <button onClick={showContent}>작성 완료</button>
        </WriteContainer>
    )
}

export default WysiwygEditor
