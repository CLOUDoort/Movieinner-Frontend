import Link from 'next/link'
import { DivContainer } from './Community.style'

const handleWrite = (e) => {
    e.preventDefault()
}

const Community = () => {
    return (
        <>
            <DivContainer>
                <div>
                    <Link href='community/write'>글쓰기</Link>
                </div>
                <hr></hr>
            </DivContainer>
        </>
    )
}

export default Community
