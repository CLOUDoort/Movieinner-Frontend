import { Editor } from '@tiptap/core'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import StarterKit from '@tiptap/starter-kit'
import EditorMenu from './EditorMenu'

const TiptapEditor = (props) => {
    const editor = useEditor({
        extensions: [StarterKit, Document, Paragraph, Text],
        content: props.content,
        editable: props.isEditible,
    })
    return (
        <>
            <EditorContent editor={editor} />
            <EditorMenu editor={editor} />
        </>
    )
}

export default TiptapEditor
