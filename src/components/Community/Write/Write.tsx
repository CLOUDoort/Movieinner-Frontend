// dynamic import를 통해 ssr 해제
import dynamic from 'next/dynamic'
const NoSsrWysiwyg = dynamic(() => import('./Editor'), { ssr: false })

const Write = () => {

    return <NoSsrWysiwyg />
}

export default Write
