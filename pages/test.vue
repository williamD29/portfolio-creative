<template>
    <div class="m-16 space-y-8">
        <Home />
        <div class="flex space-x-4 items-end">
            <BaseToggle :color="color">
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
        </div>
        <div class="flex space-x-4 items-end">
            <BaseLink :color="color" url="#" type="default-link" target="_blank"
                >Link 1</BaseLink
            >
            <BaseLink :color="color" url="#" type="nuxt-link">Link 2</BaseLink>
        </div>
        <div class="flex flex-wrap space-x-4 items-end">
            <BaseButton
                v-for="(item, index) in sizes"
                :key="`input-${index}`"
                :size="item"
                :color="color"
                >Button {{ item }}</BaseButton
            >
        </div>
        <div class="flex flex-wrap space-x-4 items-end">
            <BaseButton
                v-for="(item, index) in sizes"
                :key="`input-${index}`"
                :size="item"
                class="rounded-full"
                :color="color"
                >Button {{ item }}</BaseButton
            >
        </div>
        <div
            class="flex flex-wrap space-x-4 items-end p-8 my-4 rounded-lg"
            :class="`bg-${color}-200`"
        >
            <BaseButton
                v-for="(item, index) in sizes"
                :key="`input-${index}`"
                :size="item"
                appearance="dark"
                class="rounded-full"
                :color="color"
                >Button {{ item }}</BaseButton
            >
        </div>
        <div
            class="flex flex-wrap space-x-4 items-end p-8 my-4 rounded-lg bg-gray-800"
        >
            <BaseButton
                v-for="(item, index) in sizes"
                :key="`input-${index}`"
                :size="item"
                appearance="light"
                class="rounded-full"
                :color="color"
                >Button {{ item }}</BaseButton
            >
        </div>
        <div class="flex flex-wrap space-x-4 items-end">
            <BaseButton
                v-for="(item, index) in sizes"
                :key="`input-${index}`"
                :size="item"
                :color="color"
                type="secondary"
                >Button {{ item }}</BaseButton
            >
        </div>
        <div class="flex flex-wrap space-x-4 items-end">
            <BaseButton
                v-for="(item, index) in sizes"
                :key="`input-${index}`"
                :size="item"
                :color="color"
                type="tertiary"
                >Button {{ item }}</BaseButton
            >
        </div>
        <div class="flex flex-wrap space-x-4 items-end">
            <BaseInput
                v-for="(item, index) in sizes"
                :key="`input-${index}`"
                :size="item"
                :color="color"
                :placeholder="`Input ${item}`"
            />
        </div>
        <div class="flex space-x-4 items-end">
            <BaseSelect :color="color" class="w-64" />
        </div>
        <div
            data-cursor-hover
            class="h-64 w-full"
            :class="`bg-${color}-200`"
        ></div>
        <div class="flex flex-col space-y-4">
            <p
                v-for="(item, index) in sizes"
                :key="`p-${index}`"
                :class="`text-${item}`"
                class="text-gray-800"
            >
                The five boxing wizards jump quickly
            </p>
            <p
                v-for="(item, index) in plusSizes"
                :key="`p+-${index}`"
                :class="`text-${item}`"
                class="text-gray-800"
            >
                The five boxing wizards jump quickly
            </p>
            <p class="text-width text-gray-800">
                The five boxing wizards jump quickly
            </p>
        </div>
    </div>
</template>

<script>
import Home from '@/components/sections/Home.vue'
export default {
    components: {
        Home,
    },
    data() {
        return {
            sizes: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
            plusSizes: ['4xl', '5xl', '6xl'],
        }
    },
    computed: {
        color() {
            return this.$store.state.color.color
        },
    },
}
</script>

<style>
.text-width {
    font-size: calc((75vw - 4.5rem) / 7);
}
</style>
