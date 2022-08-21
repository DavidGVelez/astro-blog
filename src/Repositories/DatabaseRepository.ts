import { Post } from '@Interfaces/index'
import { RepositoryInterface } from './RepositoryInterface'

export class DatabaseRepository implements RepositoryInterface {
    database: DatabaseRepository
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

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA8M3ZVSARBFmXzBY-LnwXiIrvoSMWNQ7E",
//   authDomain: "astro-blogs.firebaseapp.com",
//   projectId: "astro-blogs",
//   storageBucket: "astro-blogs.appspot.com",
//   messagingSenderId: "418548376323",
//   appId: "1:418548376323:web:5fb528ae3d3fc186d7bf36"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
