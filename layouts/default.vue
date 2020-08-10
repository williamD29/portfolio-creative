<template>
    <div>
        <Nuxt />
        <CursorEffect />
    </div>
</template>

<script>
import CursorEffect from '@/components/core/CursorEffect.vue'
import colors from '@/utils/colors.js'

export default {
    components: {
        CursorEffect,
    },
    mounted() {
        const root = document.documentElement
        root.style.setProperty(
            '--highlight-color',
            colors[this.$store.state.color.color]['600']
        )
    },
}
</script>

<style>
:root {
    --highlight-color: theme('colors.purple.600');
}
::selection {
    background-color: var(--highlight-color);
    color: white;
}
::-moz-selection {
    background-color: var(--highlight-color);
    color: white;
}
</style>
