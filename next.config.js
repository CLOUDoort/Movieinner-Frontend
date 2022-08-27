/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['movie-inner.s3.ap-northeast-2.amazonaws.com'],
    },
}
module.exports = nextConfig
