<template>
    <div>
        <Nuxt />
        <CursorEffect />
    </div>
</template>

<script>
import CursorEffect from '@/components/core/CursorEffect.vue'

export default {
    components: {
        CursorEffect,
    },
}
</script>
