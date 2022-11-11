import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFileXFill, BsPencilFill } from 'react-icons/bs'
import { FeedRemoteBox } from './Feed.style'
import { apiInstance } from '../../../apis/setting'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const FeedRemote = (props) => {
    const { clickWrite } = props
    const [search, setSearch] = useState('')
    const [menu, setMenu] = useState('')
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const menuChange = (e: SelectChangeEvent) => {
        setMenu(e.target.value)
    }
    const clickSearch = async () => {
        try {
            const getResponse = await apiInstance.get(`/content/search`, {
                params: {
                    type: menu,
                    search: search,
                },
            })
            console.log('search', getResponse.data)
        } catch (e) {
            console.error(e.response)
        }
    }

    return (
        <>
            <FeedRemoteBox>
                <FormControl size='small'>
                    <InputLabel id='demo-select-small'>검색</InputLabel>
                    <Select labelId='demo-select-small' id='demo-select-small' value={menu} label='Age' onChange={menuChange}>
                        <MenuItem value={'title'}>제목</MenuItem>
                        <MenuItem value={'content'}>내용</MenuItem>
                        <MenuItem value={'titleAndContent'}>제목+내용</MenuItem>
                        <MenuItem value={'writer'}>작성자</MenuItem>
                    </Select>
                </FormControl>
                <BsPencilFill onClick={clickWrite} size={50}></BsPencilFill>
                <input type='text' placeholder='검색' onChange={handleChange} />
                <AiOutlineSearch onClick={clickSearch} size={50}></AiOutlineSearch>
            </FeedRemoteBox>
        </>
    )
}

export default FeedRemote
