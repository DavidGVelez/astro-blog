import { Post } from '@Interfaces/index'

export interface RepositoryInterface {
    findOne(slug: string): Post
    findAll(): Array<Post>
    create(post: Post): void
    update(post: Post): void
    delete(slug: string): void
}
