import { MdFormatBold } from 'react-icons/md'

const EditorMenu = ({ editor }: any) => {
    if (!editor) return null
    return (
        <div>
            <MdFormatBold
                size={20}
                cursor={'pointer'}
                onClick={() => editor.chain().focus().toggledBold().run()}
                style={{ color: editor.isActive('bold') ? 'orange' : 'black' }}
            />
        </div>
    )
}

export default EditorMenu
