import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef, useState } from 'react'
import { WriteContainer, WriteTitle, WriteBtn } from './Write.style'
import { useRouter } from 'next/router'
import { apiInstance } from '../../apis/setting'

const WysiwygEditor = (props) => {
    const { nickname } = props
    const router = useRouter()
    const [title, setTitle] = useState('')
    const editorRef = useRef(null)
    const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']]

    const handleChange = (e) => {
        const { value } = e.target
        setTitle(value)
    }

    const showContent = async () => {
        const editorIns = editorRef.current.getInstance()
        const content = editorIns.getMarkdown()
        console.log('title', title)
        console.log('content', content)

        const postContent = await apiInstance.post('/community/content', { nickname: nickname, title: title, content: content, file: '' })
    }
    return (
        <WriteContainer>
            <WriteTitle type='text' placeholder='제목을 입력해주세요!' onChange={handleChange} />
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
            <WriteBtn>
                <button onClick={() => router.push('/community/feed')}>나가기</button>
                <button onClick={showContent}>저장</button>
            </WriteBtn>
        </WriteContainer>
    )
}

export default WysiwygEditor
