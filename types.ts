type Tags =
    | "react"
    | "next.js"
    | "javascript"
    | "typescript"

export type Post = {
    title: string,
    publishedAt: string,
    description: string,
    tag: Tags,
    slug: string
}