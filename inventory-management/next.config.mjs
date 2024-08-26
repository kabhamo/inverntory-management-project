/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "https://s3-inventory-management-kabha.s3.amazonaws.com",
                port: "",
                pathname: "/**"
            }
        ]
    }
};

export default nextConfig;
