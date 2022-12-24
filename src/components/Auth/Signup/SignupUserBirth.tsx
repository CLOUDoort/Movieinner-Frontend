import moment from "moment"
import { useCallback, useEffect, useState } from "react"
import { setUser } from "../../../store/reducers/signupSlice"
import { BirthInfo } from "./Signupinfo.style"
import { Calendar } from 'react-date-range'
import ko from 'date-fns/locale/ko'
import { useDispatch } from "react-redux"

const SignupUserBirth = (props) => {
    const { setUserBirth } = props
    const [birth, setBirth] = useState('')
    const dispatch = useDispatch()
    const [select, setSelect] = useState(false)

    // birth calendar
    const [showCalendar, setShowCalendar] = useState<boolean>(false) // 캘린더 토글
    const today = moment().toDate()
    const [date, setDate] = useState<Date>(today) // date 선언하고 기본갓을 오늘 날짜로 지정
    const onChangeDate = useCallback((date: Date): void | undefined => {
        if (!date) {
            return
        }
        setDate(date)
        // const dateTimestamp = Date.parse(String(date))
        setShowCalendar(false)
        setBirth(date.toLocaleDateString().replaceAll(' ', ''))
        setSelect(true)
    }, [])
    const clickHandler = () => {
        setShowCalendar(true)
        setSelect(false)
    }
    useEffect(() => {
        dispatch(setUser({ key: 'birth', value: birth }))
        setUserBirth(true)
    }, [showCalendar])
    return (
        <>
            <div>생년월일</div>
            <BirthInfo select={select}>
                <button onClick={clickHandler}>{!select && showCalendar ? '생년월일 선택' : '선택 완료!'}</button>
                {showCalendar && (
                    <Calendar locale={ko} months={1} maxDate={new Date()} date={date} onChange={onChangeDate} dateDisplayFormat={'yyyy.mm.dd'} />
                )}
                {!showCalendar && <><span>내 생일: </span>
                    <p>{date.toLocaleDateString()}</p></>}
            </BirthInfo>
        </>
    )
}

export default SignupUserBirth

