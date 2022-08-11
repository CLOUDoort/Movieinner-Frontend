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
                style={{ color: editor.isActive('bold') ? 'orange' : 'black' }}
            />
            <MdFormatItalic
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                style={{ color: editor.isActive('italic') ? 'orange' : 'black' }}
            />
            <MdFormatStrikethrough
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                style={{ color: editor.isActive('strike') ? 'orange' : 'black' }}
            />
            <MdFormatUnderlined
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                style={{ color: editor.isActive('underline') ? 'orange' : 'black' }}
            />
            <CgFormatHeading
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                style={{ color: editor.isActive('heading', { level: 1 }) ? 'orange' : 'black' }}
            />
            <MdFormatListBulleted
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                style={{ color: editor.isActive('bulletList') ? 'orange' : 'black' }}
            />
            <MdFormatListNumbered
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                style={{ color: editor.isActive('orderedList') ? 'orange' : 'black' }}
            />
            <BiCodeBlock
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                style={{ color: editor.isActive('codeBlock') ? 'orange' : 'black' }}
            />
            <GrBlockQuote
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                style={{ color: editor.isActive('blockquote') ? 'orange' : 'black' }}
            />
            <MdHorizontalRule
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                style={{ color: editor.isActive('setHorizontalRule') ? 'orange' : 'black' }}
            />
            <MdUndo
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().undo().run()}
                style={{ color: editor.isActive('undo') ? 'orange' : 'black' }}
            />
            <MdRedo
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().redo().run()}
                style={{ color: editor.isActive('redo') ? 'orange' : 'black' }}
            />
        </EditorMenuDiv>
    )
}

export default EditorMenu
