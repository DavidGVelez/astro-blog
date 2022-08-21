import { Post } from '@Interfaces/index'
import { slugify } from '@utils/index'
export class PostModel {
    title: string
    slug: string
    created_at: Date
    body: string
    tags?: string[]

    constructor(post: Post) {
        try {
            this.title = post.title
            this.slug = this.slug || slugify(this.title)
            this.created_at = new Date()
            this.body = post.body
            this.tags = post.tags
        } catch (error) {
            throw new Error('PostModelError: Missing required params')
        }
    }
}
