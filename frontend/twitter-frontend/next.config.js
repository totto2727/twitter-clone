/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [{ source: '/', destination: '/home', permanent: true }]
  },
  rewrites: async () => {
    return []
  },
}
