import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	serverExternalPackages: ['@sanity/client'],
	experimental: {
		serverComponentsHmrCache: false,
	},
	images: {
		remotePatterns: [
			{
				hostname: "cdn.sanity.io",
				protocol: "https",
			},
			{
				hostname: "assets.aceternity.com",
				protocol: "https",
			},
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
	},
};

export default nextConfig;
