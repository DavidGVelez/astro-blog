import { PostModel } from '@Models/index'
import { Post } from '@Interfaces/index'

describe('PostModel', () => {
    it('Creates a PostModel Object', async () => {
        const data: Post = {
            title: 'Test title',
            body: 'Lorem ipsum',
        }

        const post = new PostModel(data)

        expect(post).toBeInstanceOf(PostModel)
        expect(post).toEqual({
            title: 'Test title',
            created_at: post.created_at,
            body: 'Lorem ipsum',
            slug: 'test-title',
        })
    })
    it('Throws an error if there is one or more required params missing ', async () => {
        const data: any = {
            body: 'Lorem ipsum',
        }
        try {
            new PostModel(data)
        } catch (error) {
            expect(error.message).toEqual(
                'PostModelError: Missing required params'
            )
        }
    })
})
