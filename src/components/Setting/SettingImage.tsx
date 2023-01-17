import Image from "next/image"
import { useRef, useState } from "react"
import { toast } from "react-toastify"
import { apiInstance } from "../../apis/setting"
import LoadingLogo from "../Common/Loading/LoadingLogo"
import { SettingModifyImage } from "./SettingProfile.style"

const SettingImage = (props) => {
    const { userImage, loading, userIdx } = props
    const fileInput = useRef(null)
    const [image, setImage] = useState(userImage)

    const handleImage = async (e: any) => {
        const file = e.target.files[0]
        if (!file) return

        // 이미지 화면에 띄우기
        const reader = new FileReader()
        reader.readAsDataURL(file) // 파일에서 불러오는 메서드 / 종료되는 시점에 readyState는 Done(2)가 되고 onload 시작
        reader.onload = (e: any) => {
            if (reader.readyState === 2) {
                // 파일 읽는 것이 성공했을 때, 2 반환 / 진행 중은 1, 실패는 0
                setImage(e.target.result)
            }
        }

        // 이미지 s3에 보내고 url 받기
        const formData = new FormData()
        formData.append('image', file)
        try {
            const imageRes = await apiInstance.post('/image', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
            const image_URL = imageRes.data.imageURL
            console.log('image_URL', image_URL)
            setImage(image_URL)
            // delete는 data로 params 보내기
            await apiInstance.put(`/users/change/image`, { imageURL: image_URL, userIdx: userIdx })
            if (image != '/blank.png') await apiInstance.delete(`/image`, { data: { imageName: image } })
            toast.success('success')
        } catch (e) {
            console.log(e)
            toast.error('error')
        }
    }
    const deleteImage = async () => {
        try {
            await apiInstance.delete(`/image`, { data: { imageName: image } })
            await apiInstance.put(`/users/change/image`, { imageURL: '', userIdx: userIdx })
            setImage('/blank.png')
            toast.success('삭제 성공')
        } catch (e) {
            console.error(e.response)
        }
    }

    return (
        <>
            {!loading ?
                <SettingModifyImage>
                    <Image src={image ? image : '/blank.png'} width={100} height={100} alt='프로필 이미지입니다' />
                    <label htmlFor="input-file">이미지 업로드</label>
                    <input type='file' name='image_URL' id='input-file' accept='image/*' style={{ display: 'none' }} ref={fileInput} onChange={handleImage} />
                    <label onClick={deleteImage}>이미지 제거</label>
                </SettingModifyImage> : <LoadingLogo />}
        </>
    )
}

export default SettingImage