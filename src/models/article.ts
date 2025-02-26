export default interface Article {
    id: number,
    slug: string,
    title: string,
    image_url: string,
    published_at: string,
    category_label?: string,
    description?: string,
    content?: string,
    article?: Article
}