export default {
    reactStrictMode: true,
    images: {
        
        remotePatterns: [
            {
              protocol: "https",
              hostname: 'res.cloudinary.com',
            },
            {
              protocol: "https",
              hostname: "img.playbook.com",
            },
            {
              protocol: "https",
              hostname:  "images.pexels.com",
            },
          ],
    },
    experimental: {
      appDir: true,
  },
};

