import Link from "next/link"
import { CategoryBox, CategoryContainer, CategoryList } from "./Category.style"

const Category = (props) => {
    const { clickModal, list } = props
    return <>
        <CategoryContainer onClick={clickModal}>
            <CategoryBox onClick={(e) => e.stopPropagation()}>
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
    </>
}

export default Category