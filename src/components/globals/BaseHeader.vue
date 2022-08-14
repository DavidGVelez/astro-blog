<script setup lang="ts">
interface HeaderProps {
    links: Array<{
        url: string
        name: string
    }>
}

const { links = [] } = defineProps<HeaderProps>()
</script>

<template>
    <header>
        <nav class="px-8 py-12">
            <ul class="w-6/12 m-auto flex justify-center">
                <li class="" v-for="(route, index) in links" :key="index">
                    <a class="px-2" :href="route.url">
                        {{ route.name }}
                    </a>
                </li>
            </ul>
        </nav>
    </header>
</template>
