/** @type {import('next').NextConfig} */
import { fileURLToPath } from 'url';
import path from 'path';
import { hostname } from 'os';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src/sass')],
        prependData: `@import "main.sass"`,
    },
    images: {
        remotePatterns: [{
            hostname: 'cdn.shopify.com',
            protocol: 'https'
        }]
    }
};

export default nextConfig;
