import { useRouter } from 'next/router'
import WysiwygEditor from './WysiwygEditor'

const ModifyPost = () => {
    const router = useRouter()
    const { idx } = router.query

    return (
        <>
            <WysiwygEditor />
        </>
    )
}

export default ModifyPost
