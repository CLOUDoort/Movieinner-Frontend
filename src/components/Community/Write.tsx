import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

// dynamic import를 통해 ssr 해제
import dynamic from 'next/dynamic'
const NoSsrWysiwyg = dynamic(() => import('./WysiwygEditor'), { ssr: false })

const Write = () => {
    const nickname = useSelector((state: RootState) => state.nickname.nickname)

    return <NoSsrWysiwyg nickname={nickname} />
}

export default Write
