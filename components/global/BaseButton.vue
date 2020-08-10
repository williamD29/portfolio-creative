<template>
    <button
        v-if="type === 'primary'"
        type="button"
        :class="[
            size === 'custom' ? '' : '',
            size === 'xs' ? 'px-2.5 py-1.5 rounded text-xs leading-4' : '',
            size === 'sm' ? 'px-3 py-2 rounded-md text-sm leading-4' : '',
            size === 'md' ? 'px-4 py-2 rounded-md text-sm leading-5' : '',
            size === 'lg' ? 'px-4 py-2 rounded-md text-base leading-6' : '',
            size === 'xl' ? 'px-6 py-3 rounded-md text-base leading-6' : '',
            size === '2xl' ? 'px-8 py-4 rounded-md text-base leading-6' : '',
            size === '3xl' ? 'px-12 py-5 rounded-md text-base leading-6' : '',
            appearance === 'light'
                ? `text-gray-800 bg-white hover:bg-${color}-600 hover:text-white active:text-white active:bg-${color}-700 focus:border-transparent focus:shadow-outline-${color}`
                : ``,
            appearance === 'dark'
                ? `text-white bg-gray-800 hover:bg-${color}-600 active:bg-${color}-700 focus:border-transparent focus:shadow-outline-${color}`
                : ``,
            appearance === 'default'
                ? `text-white bg-${color}-600 hover:bg-${color}-500 active:bg-${color}-700 focus:border-${color}-700 focus:shadow-outline-${color}`
                : ``,
            classNames,
        ]"
        class="inline-flex items-center border border-transparent font-medium text-white focus:outline-none transition ease-in-out duration-150"
        @click.prevent="$emit('base-button-clicked', $event)"
    >
        <slot></slot>
    </button>
    <button
        v-else-if="type === 'secondary'"
        type="button"
        :class="[
            size === 'custom' ? '' : '',
            size === 'xs' ? 'px-2.5 py-1.5 rounded text-xs leading-4' : '',
            size === 'sm' ? 'px-3 py-2 rounded-md text-sm leading-4' : '',
            size === 'md' ? 'px-4 py-2 rounded-md text-sm leading-5' : '',
            size === 'lg' ? 'px-4 py-2 rounded-md text-base leading-6' : '',
            size === 'xl' ? 'px-6 py-3 rounded-md text-base leading-6' : '',
            size === '2xl' ? 'px-8 py-4 rounded-md text-base leading-6' : '',
            size === '3xl' ? 'px-12 py-5 rounded-md text-base leading-6' : '',
            `text-${color}-700 bg-${color}-100 hover:bg-${color}-50 focus:border-${color}-300 focus:shadow-outline-${color} active:bg-${color}-200`,
            classNames,
        ]"
        class="inline-flex items-center border border-transparent font-medium focus:outline-none transition ease-in-out duration-150"
        @click.prevent="$emit('base-button-clicked', $event)"
    >
        <slot></slot>
    </button>
    <button
        v-else
        type="button"
        :class="[
            size === 'custom' ? '' : '',
            size === 'xs' ? 'px-2.5 py-1.5 rounded text-xs leading-4' : '',
            size === 'sm' ? 'px-3 py-2 rounded-md text-sm leading-4' : '',
            size === 'md' ? 'px-4 py-2 rounded-md text-sm leading-5' : '',
            size === 'lg' ? 'px-4 py-2 rounded-md text-base leading-6' : '',
            size === 'xl' ? 'px-6 py-3 rounded-md text-base leading-6' : '',
            size === '2xl' ? 'px-8 py-4 rounded-md text-base leading-6' : '',
            size === '3xl' ? 'px-12 py-5 rounded-md text-base leading-6' : '',
            `focus:border-${color}-300 focus:shadow-outline-${color}`,
            classNames,
        ]"
        class="inline-flex items-center border border-gray-300 font-medium text-gray-700 bg-white hover:text-gray-500 focus:outline-none active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
        @click.prevent="$emit('base-button-clicked', $event)"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            validator(value) {
                return ['primary', 'secondary', 'tertiary'].includes(value)
            },
            default: 'primary',
        },
        size: {
            validator(value) {
                return [
                    'custom',
                    'xs',
                    'sm',
                    'md',
                    'lg',
                    'xl',
                    '2xl',
                    '3xl',
                ].includes(value)
            },
            default: 'md',
        },
        appearance: {
            validator(value) {
                return ['default', 'light', 'dark'].includes(value)
            },
            default: 'default',
        },
        classNames: {
            type: String,
            default: null,
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
}
</script>

<style></style>
