import Link from 'next/link'
import { DivContainer, FormContainer } from './Community.style'

const handleWrite = (e) => {
    e.preventDefault()
}

const Community = () => {
    return (
        <>
            <DivContainer>
                <div>
                    <p>리뷰 / 커뮤니티</p>
                </div>
                <div>
                    <Link href='community/write'>글쓰기</Link>
                </div>
                <hr></hr>
            </DivContainer>
        </>
    )
}

export default Community
