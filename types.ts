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

type readingTime = {
    text: string,
    minutes: number,
    time: number,
    words: number
}

export type FrontMatter = {
    wordCount: number,
    readingTime: readingTime,
} & Post