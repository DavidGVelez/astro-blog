<template>
    <section class="p-5">
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <a :href="`/${post.slug}`">{{ post.title }}</a>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
type Post = {
    title: string
    slug?: string
}

const posts: Array<Post> = [
    { title: 'TEST', slug: 'slug1' },
    { title: 'TEST', slug: 'slug2' },
    { title: 'TEST', slug: 'slug3' },
    { title: 'TEST', slug: 'slug4' },
]
</script>

<style scoped></style>
