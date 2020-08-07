<template>
    <div>
        <label
            v-if="label"
            :for="id ? id : randomString"
            class="block text-sm font-medium leading-5 text-gray-700"
            >{{ label }}</label
        >
        <div class="mt-1 relative rounded-md shadow-sm">
            <input
                :id="id ? id : randomString"
                v-bind="$attrs"
                class="form-input block w-full"
                :placeholder="placeholder"
                :value="value"
                :class="[
                    size === 'xs'
                        ? 'px-2 py-1.5 rounded text-xs leading-4'
                        : '',
                    size === 'sm'
                        ? 'px-2 py-2 rounded-md text-sm leading-4'
                        : '',
                    size === 'md'
                        ? 'px-3 py-2 rounded-md text-sm leading-5'
                        : '',
                    size === 'lg'
                        ? 'py-2 px-3 rounded-md text-base leading-6'
                        : '',
                    size === 'xl'
                        ? 'py-3 px-4 rounded-md text-base leading-6'
                        : '',
                    `focus:border-${color}-300 focus:shadow-outline-${color}`,
                ]"
            />
        </div>
    </div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: {
        label: {
            type: String,
            default: null,
        },
        id: {
            type: String,
            default: null,
        },
        size: {
            validator(value) {
                return ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
            },
            default: 'md',
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
        placeholder: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: null,
        },
    },
    data() {
        return {
            randomString: Math.random().toString(36).slice(2),
        }
    },
}
</script>

<style></style>
