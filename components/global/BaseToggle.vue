<template>
    <span
        :class="[
            active ? `bg-${color}-600` : 'bg-gray-200',
            `focus:shadow-outline-${color}`,
        ]"
        role="checkbox"
        tabindex="0"
        aria-checked="false"
        class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none"
        @click="clickListener"
    >
        <span
            :class="[active ? 'translate-x-5' : 'translate-x-0']"
            aria-hidden="true"
            class="relative inline-block h-5 w-5 rounded-full bg-white shadow transform transition ease-in-out duration-200"
        >
            <span
                :class="[
                    active
                        ? 'opacity-0 ease-out duration-100'
                        : 'opacity-100 ease-in duration-200',
                ]"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            >
                <slot name="default"></slot>
            </span>
            <span
                :class="[
                    active
                        ? 'opacity-100 ease-in duration-200'
                        : 'opacity-0 ease-out duration-100',
                ]"
                class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            >
                <slot name="active"></slot>
            </span>
        </span>
    </span>
</template>

<script>
export default {
    props: {
        icon: {
            type: Boolean,
            default: false,
        },
        color: {
            validator(value) {
                return [
                    'gray',
                    'cool-gray',
                    'pink',
                    'red',
                    'orange',
                    'yellow',
                    'green',
                    'teal',
                    'blue',
                    'indigo',
                    'purple',
                ].includes(value)
            },
            default: 'purple',
        },
    },
    data() {
        return {
            active: false,
        }
    },
    methods: {
        clickListener() {
            this.active = !this.active
            this.$emit('base-toggle-clicked', this.active)
        },
    },
}
</script>

<style></style>
