import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsPencilFill } from 'react-icons/bs'
import { FeedRemoteBox } from './Feed.style'
import FeedSearchModal from './Search/FeedSearchModal'

const FeedRemote = (props) => {
    const { clickWrite } = props
    const [showModal, setShowModal] = useState(false)

    const clickModal = () => setShowModal(!showModal)

    return (
        <>
            <FeedRemoteBox>
                <BsPencilFill onClick={clickWrite} size={50}></BsPencilFill>
                <AiOutlineSearch onClick={clickModal} size={60}></AiOutlineSearch>
            </FeedRemoteBox>
            {showModal && <FeedSearchModal clickModal={clickModal} />}
        </>
    )
}

export default FeedRemote
