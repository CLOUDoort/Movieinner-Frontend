/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
}
module.exports = nextConfig

module.exports = {
    images: {
        domains: ['movie-inner.s3.ap-northeast-2.amazonaws.com'],
    },
}
