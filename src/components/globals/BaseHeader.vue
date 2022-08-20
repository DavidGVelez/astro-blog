<script setup lang="ts">
import { onMounted } from 'vue'

interface HeaderProps {
    links: Array<{
        name: string
        slug: string
        current: boolean
    }>
}
const { links = [] } = defineProps<HeaderProps>()
</script>

<template>
    <header>
        <nav class="px-8 py-12 my-10">
            <ul class="w-6/12 m-auto flex justify-center">
                <li class="" v-for="(route, index) in links" :key="index">
                    <a class="px-2" :href="route.slug">
                        {{ route.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
