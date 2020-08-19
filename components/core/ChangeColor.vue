<template>
    <div>
        <div class="flex flex-col space-y-2">
            <BaseButton
                v-for="(value, index) in colors"
                :key="`color-${index}`"
                :aria-label="`change color ${value}`"
                size="custom"
                class-names="h-5 w-5 rounded"
                :color="value"
                @base-button-clicked="changeColor(value)"
            />
        </div>
    </div>
</template>

<script>
import colors from '@/utils/colors.js'

export default {
    data() {
        return {
            colors: [
                'pink',
                'red',
                'orange',
                'yellow',
                'green',
                'teal',
                'blue',
                'indigo',
                'purple',
            ],
        }
    },
    methods: {
        changeColor(value) {
            if (this.$store.state.color.color !== value) {
                this.$store.dispatch('color/updateColor', value)
                const root = document.documentElement
                root.style.setProperty(
                    '--highlight-color',
                    colors[this.$store.state.color.color]['600']
                )
                root.style.setProperty(
                    '--link-decoration',
                    colors[this.$store.state.color.color]['500']
                )
            }
        },
    },
}
</script>

<style>
.grid {
    grid-auto-columns: min-content;
}
</style>
