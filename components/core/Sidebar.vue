<template>
    <div
        class="w-24 h-screen fixed border-r border-gray-200 flex flex-col space-y-8 justify-center items-center bg-transparent dark:bg-gray-900 dark:border-gray-700"
    >
        <BaseToggle
            ref="themeToggle"
            :color="color"
            @base-toggle-clicked="setCookie"
        >
            <template #default>
                <svg
                    class="h-3 w-3 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </template>
            <template #active>
                <svg
                    :class="`text-${color}-600`"
                    class="h-3 w-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                </svg>
            </template>
        </BaseToggle>
        <ChangeColor />
    </div>
</template>

<script>
import ChangeColor from '@/components/core/ChangeColor.vue'

export default {
    components: {
        ChangeColor,
    },
    computed: {
        color() {
            return this.$store.state.color.color
        },
    },
    mounted() {
        if (document.cookie) {
            if (this.getCookie('theme-toggle-active')) {
                this.$refs.themeToggle._data.active =
                    this.getCookie('theme-toggle-active') !== 'false'
                this.setTheme(this.getCookie('theme-toggle-active') !== 'false')
            }
        }
    },
    methods: {
        getCookie(name) {
            return document.cookie
                .split(';')
                .find((row) => row.includes(name))
                .split('=')[1]
        },
        setCookie(value) {
            if (process.client) {
                document.cookie = `theme-toggle-active=${value}`
                this.setTheme(value)
            }
        },
        setTheme(value) {
            if (value) {
                this.$colorMode.preference = 'dark'
            } else {
                this.$colorMode.preference = 'light'
            }
        },
    },
}
</script>

<style></style>
