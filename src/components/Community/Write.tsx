import dynamic from 'next/dynamic'
const NoSsrWysiwyg = dynamic(() => import('./WysiwygEditor'), { ssr: false })

const Write = () => {
    return <NoSsrWysiwyg />
}

export default Write
