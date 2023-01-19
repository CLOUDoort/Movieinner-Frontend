import Link from "next/link"
import { useEffect, useState } from "react"
import { CategoryBox, CategoryContainer, CategoryList } from "./HeaderCategory.style"

const HeaderCategory = (props) => {
    const { modal, clickModal, list } = props
    const [transition, setTransition] = useState(false)
    useEffect(() => setTransition(!transition), [modal])
    return (
        <CategoryContainer onClick={clickModal}>
            <CategoryBox onClick={(e) => e.stopPropagation()} transition={transition}>
                <CategoryList>
                    {list.map((obj) => (
                        <div key={obj.id}>
                            <Link href={`/search?genre=${obj.id}&name=${obj.name}`}>
                                <a onClick={clickModal}>
                                    {obj.name}
                                </a>
                            </Link>
                        </div>
                    ))}
                </CategoryList>
            </CategoryBox>
        </CategoryContainer>
    )
}

export default HeaderCategory