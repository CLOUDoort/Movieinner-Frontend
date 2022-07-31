import Link from 'next/link'
import { FooterDiv } from './Footer.style'

const Footer = () => {
    return (
        <>
            <FooterDiv>
                <div>COPYRIGHT</div>
                <div>
                    <div>
                        <Link href='/'>Frontend Github</Link>
                    </div>
                    <div>
                        <Link href='/'>Backend Github</Link>
                    </div>
                </div>
            </FooterDiv>
        </>
    )
}

export default Footer
