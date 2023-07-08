/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/getkeys',
            destination: 'http://127.0.01:3000/profile/getkeys',
          },
          {
            source: '/sendmessagewithrsa',
            destination: 'http://127.0.01:3000/profile/sendmessagewithrsa', // Matched parameters can be used in the destination
          },
        ]
      },
    }


module.exports = nextConfig
