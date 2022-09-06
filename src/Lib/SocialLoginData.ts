// kakao_login
const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY
const KAKAO_REDIRECT_URI = 'http://localhost:3000/login/kakao'
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&scope=account_email`

// google_login
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY
const GOOGLE_REDIRECT_URI = 'http://localhost:3000/login/google'
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile`

// naver_login
const NAVER_CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_CLIENT_KEY
const NAVER_REDIRECT_URL = 'http://localhost:3000/login/naver'
const STATE = 'Movie-inner'
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${NAVER_REDIRECT_URL}
`
