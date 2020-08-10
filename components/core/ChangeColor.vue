<template>
    <div>
        <label class="block text-sm font-medium leading-5 text-gray-700"
            >Change color</label
        >
        <div class="flex flex-wrap space-x-4 mt-1">
            <BaseButton
                v-for="(value, index) in colors"
                :key="`color-${index}`"
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
            }
        },
    },
}
</script>

<style></style>
