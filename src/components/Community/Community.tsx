import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { DivContainer, FormContainer } from './Community.style'

const handleWrite = (e) => {
    e.preventDefault()
}

const Community = () => {
    return (
        <>
            <Header />
            <DivContainer>
                <p>리뷰 / 커뮤니티</p>
                <input type='button' value='글쓰기' />
                <hr></hr>
            </DivContainer>
            <Footer />
        </>
    )
}

export default Community
