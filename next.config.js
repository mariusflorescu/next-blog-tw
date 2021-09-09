/** @type {import('next').NextConfig} */
import mdx from '@next/mdx'
const withMDX = mdx({
  extension: /\.mdx$/
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
})
