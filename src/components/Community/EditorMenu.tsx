import {
    MdFormatBold,
    MdFormatItalic,
    MdFormatStrikethrough,
    MdFormatUnderlined,
    MdUndo,
    MdRedo,
    MdHorizontalRule,
    MdFormatListBulleted,
    MdFormatListNumbered,
} from 'react-icons/md'
import { CgFormatHeading } from 'react-icons/cg'
import { EditorMenuDiv } from './Editor.style'
import { BiCodeBlock } from 'react-icons/bi'
import { GrBlockQuote } from 'react-icons/gr'

const EditorMenu = ({ editor }: any) => {
    if (!editor) return null
    return (
        <EditorMenuDiv>
            <MdFormatBold
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleBold().run()}
                style={{ color: editor.isActive('bold') ? 'orange' : 'red' }}
            />
            <MdFormatItalic
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                style={{ color: editor.isActive('italic') ? 'orange' : 'red' }}
            />
            <MdFormatStrikethrough
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                style={{ color: editor.isActive('strike') ? 'orange' : 'red' }}
            />
            <MdFormatUnderlined
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                style={{ color: editor.isActive('underline') ? 'orange' : 'red' }}
            />
            <CgFormatHeading
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                style={{ color: editor.isActive('heading', { level: 1 }) ? 'orange' : 'red' }}
            />
            <MdFormatListBulleted
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                style={{ color: editor.isActive('bulletList') ? 'orange' : 'red' }}
            />
            <MdFormatListNumbered
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                style={{ color: editor.isActive('orderedList') ? 'orange' : 'red' }}
            />
            <BiCodeBlock
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                style={{ color: editor.isActive('codeBlock') ? 'orange' : 'red' }}
            />
            <GrBlockQuote
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                style={{ color: editor.isActive('blockquote') ? 'orange' : 'red' }}
            />
            <MdHorizontalRule
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                style={{ color: editor.isActive('setHorizontalRule') ? 'orange' : 'red' }}
            />
            <MdUndo
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().undo().run()}
                style={{ color: editor.isActive('undo') ? 'orange' : 'red' }}
            />
            <MdRedo
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().redo().run()}
                style={{ color: editor.isActive('redo') ? 'orange' : 'red' }}
            />
        </EditorMenuDiv>
    )
}

export default EditorMenu
