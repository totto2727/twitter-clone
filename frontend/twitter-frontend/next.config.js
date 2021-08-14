/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return []
  },
  rewrites: async () => {
    return [{ source: '/', destination: '/home' }]
  },
}
