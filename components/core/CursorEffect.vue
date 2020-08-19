<template>
    <client-only>
        <cursor-fx
            id="cursor"
            class="transition-colors ease-in-out duration-300"
            :color="color"
            delay="0"
            :config="customConfig"
        >
            <svg
                viewBox="0 0 20 20"
                fill="white"
                class="arrow-right w-6 h-6 self-center"
            >
                <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </cursor-fx>
    </client-only>
</template>

<script>
import colors from '@/utils/colors.js'

export default {
    data() {
        return {
            customConfig: {
                lerps: {
                    dot: 1,
                    circle: 0.18,
                    custom: 0.165,
                },
                scale: {
                    ratio: 0.18,
                    min: 0,
                    max: 1,
                },
                opacity: 1,
            },
        }
    },
    computed: {
        color() {
            return colors[this.$store.state.color.color]['600']
        },
    },
}
</script>

<style>
#cursor {
    z-index: 10000 !important;
}
</style>
