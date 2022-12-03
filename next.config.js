/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['links.papareact.com', 'scontent.fcxl1-1.fna.fbcdn.net'],
	},
	experimental: {
		appDir: {
			appDir: true,
		},
	},
};

module.exports = nextConfig;
