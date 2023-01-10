import { useEffect, useState } from "react"
import { HeaderNotiModalBox, HeaderNotiModalContainer } from "./HeaderNotiModal.style"

const HeaderNotiModal = (props) => {
    const { modal, controlModal } = props
    const [transition, setTransition] = useState(false)
    useEffect(() => {
        setTransition(!transition)
    }, [modal])
    return (
        <HeaderNotiModalContainer onClick={controlModal}>
            <HeaderNotiModalBox transition={transition} onClick={(e) => e.stopPropagation()}>

            </HeaderNotiModalBox>
        </HeaderNotiModalContainer>
    )
}

export default HeaderNotiModal