<template>
    <div>
        <Sidebar />
        <div
            class="ml-24 bg-white dark:bg-gray-900 transition-colors duration-150"
        >
            <Nuxt />
            <CursorEffect />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/core/Sidebar.vue'
import CursorEffect from '@/components/core/CursorEffect.vue'
import colors from '@/utils/colors.js'

export default {
    components: {
        Sidebar,
        CursorEffect,
    },
    mounted() {
        const root = document.documentElement
        root.style.setProperty(
            '--highlight-color',
            colors[this.$store.state.color.color]['600']
        )
        root.style.setProperty(
            '--link-decoration',
            colors[this.$store.state.color.color]['500']
        )
    },
}
</script>

<style>
:root {
    --highlight-color: theme('colors.purple.600');
    --text-color: theme('colors.white');
}
::selection {
    opacity: 1;
    background-color: var(--highlight-color);
    color: var(--text-color);
}
::-moz-selection {
    background-color: var(--highlight-color);
    color: var(--text-color);
}
</style>
