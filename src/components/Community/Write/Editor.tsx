import { Editor } from '@toast-ui/react-editor'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'
import { useRef, useState } from 'react'
import { WriteContainer, WriteTitle, WriteBtn } from './Write.style'
import { useRouter } from 'next/router'
import { apiInstance } from '../../../apis/setting'
import { toast } from 'react-toastify'

const WysiwygEditor = (props) => {
    const [image, setImage] = useState('')
    const { nickname } = props
    const router = useRouter()
    const [title, setTitle] = useState('')
    const editorRef = useRef(null)
    const toolbarItems = [['heading', 'bold', 'italic', 'strike'], ['hr'], ['ul', 'ol', 'task'], ['table', 'link'], ['image'], ['code'], ['scrollSync']]

    const handleChange = (e) => {
        const { value } = e.target
        setTitle(value)
    }

    const onUploadImage = async (blob, callback) => {
        // blob은 base64 인코딩된 이미지 파일
        // formData에 담아 서버로 보내고, 서버에서는 s3에 이미지 저장후 s3에서 url을 받아 다시 프론트로 값 전송
        const formData = new FormData()
        formData.append('image', blob)
        try {
            const imageRes = await apiInstance.post('/image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            const image_URL = imageRes.data.imageURL
            setImage(image_URL)
            // 글 화면에 이미지 띄우기
            callback(image_URL, 'image')
        } catch (e) {
            console.error(e.response)
        }
    }

    const showContent = async () => {
        const editorIns = editorRef.current.getInstance()
        // const HTML = editorIns.getMarkdown()
        const content = editorIns.getHTML()
        // console.log('html', HTML)
        console.log('title', title)
        console.log('content', content)
        console.log('image', image)
        const imageSize = 'style="width:400px;height:600px"'
        const position = content.indexOf('src')

        const output = [content.slice(0, position), imageSize, content.slice(position)].join('')
        console.log('output', output)
        // 작성글 서버로 보내기
        try {
            const postContent = await apiInstance.post('/community/content', { nickname: nickname, title: title, content: output, file: image })
            router.replace('/community/feed/1')
            toast.success(`${postContent.data.idx} 번 글 작성 완료!`)
        } catch (e) {
            console.error(e.response)
        }
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
                hooks={{ addImageBlobHook: onUploadImage }}
            />
            <WriteBtn>
                <button onClick={() => router.push('/community/feed')}>나가기</button>
                <button onClick={showContent}>저장</button>
            </WriteBtn>
        </WriteContainer>
    )
}

export default WysiwygEditor
