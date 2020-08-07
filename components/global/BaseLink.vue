<template>
    <nuxt-link
        v-if="type === 'nuxt-link'"
        :to="url"
        :class="[
            classNames,
            ['black', 'white'].includes(color)
                ? `text-${color}`
                : `text-${color}-600`,
        ]"
        ><slot></slot
    ></nuxt-link>
    <a
        v-else
        :href="url"
        :class="[
            classNames,
            ['black', 'white'].includes(color)
                ? `text-${color}`
                : `text-${color}-600`,
        ]"
        ><slot></slot
    ></a>
</template>

<script>
export default {
    props: {
        type: {
            validator(value) {
                return ['nuxt-link', 'default-link'].includes(value)
            },
            default: 'nuxt-link',
        },
        url: {
            type: String,
            required: true,
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
                    'black',
                    'white',
                ].includes(value)
            },
            default: 'purple',
        },
    },
    data() {
        return {
            classNames: 'uppercase font-medium',
        }
    },
}
</script>

<style></style>
