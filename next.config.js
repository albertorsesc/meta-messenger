/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['links.papareact.com'],
	},
	experimental: {
		appDir: {
			appDir: true,
		},
	},
};

module.exports = nextConfig;
