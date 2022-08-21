import { Post } from '@Interfaces/index'
import { RepositoryInterface } from './RepositoryInterface'

export class PostRepository implements RepositoryInterface {
    findOne(slug: string): Post {
        throw new Error('Method not implemented.')
    }
    findAll(): Post[] {
        throw new Error('Method not implemented.')
    }
    create(post: Post): void {
        throw new Error('Method not implemented.')
    }
    update(post: Post): void {
        throw new Error('Method not implemented.')
    }
    delete(slug: string): void {
        throw new Error('Method not implemented.')
    }
}
