/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: ['movie-inner.s3.ap-northeast-2.amazonaws.com', 'image.tmdb.org/t/p/w500'],
    },
}
module.exports = nextConfig
