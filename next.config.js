/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['gravatar.com'],
		remotePatterns: [{ protocol: 'https', hostname: '*.googleusercontent.com' }],
	},
}

module.exports = nextConfig
