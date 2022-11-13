import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { apiInstance } from '../../../apis/setting'
import { SearchModalBox } from './FeedSearchModal.style'
import { toast } from 'react-toastify'
import router from 'next/router'

const FeedSearchModal = (props) => {
    const { clickModal } = props
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const menuChange = (e: SelectChangeEvent) => {
        setMenu(e.target.value)
    }

    const clickSearch = async () => {
        if (menu && search) {
            try {
                const getResponse = await apiInstance.get(`/content/search`, {
                    params: {
                        type: menu,
                        search: search,
                        page: 1, // page는 1을 default값으로
                    },
                })
                router.push('/community/feed/search/1')
                console.log('search', getResponse.data)
            } catch (e) {
                console.error(e.response)
            }
        } else if (!menu) toast.error('검색 조건 설정해주세요')
        else toast.error('검색어 입력해주세요')
    }
    return (
        <>
            <SearchModalBox onClick={clickModal}>
                <div onClick={(e) => e.stopPropagation()}>
                    <FormControl size='small'>
                        <InputLabel id='demo-select-small'>검색</InputLabel>
                        <Select labelId='demo-select-small' id='demo-select-small' value={menu} label='menu' onChange={menuChange}>
                            <MenuItem value={'title'}>제목</MenuItem>
                            <MenuItem value={'content'}>내용</MenuItem>
                            <MenuItem value={'titleAndContent'}>제목+내용</MenuItem>
                            <MenuItem value={'writer'}>작성자</MenuItem>
                        </Select>
                    </FormControl>
                    <input type='text' placeholder='검색' onChange={handleChange} />
                    <div>
                        <button onClick={clickModal}>뒤로가기</button>
                        <button onClick={clickSearch}>검색</button>
                    </div>
                </div>
            </SearchModalBox>
        </>
    )
}

export default FeedSearchModal
