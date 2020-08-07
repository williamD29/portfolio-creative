<template>
    <div class="m-16 space-y-8">
        <div class="flex flex-col">
            <label class="block text-sm font-medium leading-5 text-gray-700"
                >Change color</label
            >
            <div class="flex space-x-4 mt-1">
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
        <div class="flex space-x-4 items-end">
            <BaseButton size="xs" :color="color">Button xs</BaseButton>
            <BaseButton size="sm" :color="color">Button sm</BaseButton>
            <BaseButton size="md" :color="color">Button md</BaseButton>
            <BaseButton size="lg" :color="color">Button lg</BaseButton>
            <BaseButton size="xl" :color="color">Button xl</BaseButton>
        </div>
        <div class="flex space-x-4 items-end">
            <BaseButton size="xs" :color="color" type="secondary"
                >Button xs</BaseButton
            >
            <BaseButton size="sm" :color="color" type="secondary"
                >Button sm</BaseButton
            >
            <BaseButton size="md" :color="color" type="secondary"
                >Button md</BaseButton
            >
            <BaseButton size="lg" :color="color" type="secondary"
                >Button lg</BaseButton
            >
            <BaseButton size="xl" :color="color" type="secondary"
                >Button xl</BaseButton
            >
        </div>
        <div class="flex space-x-4 items-end">
            <BaseButton size="xs" :color="color" type="tertiary"
                >Button xs</BaseButton
            >
            <BaseButton size="sm" :color="color" type="tertiary"
                >Button sm</BaseButton
            >
            <BaseButton size="md" :color="color" type="tertiary"
                >Button md</BaseButton
            >
            <BaseButton size="lg" :color="color" type="tertiary"
                >Button lg</BaseButton
            >
            <BaseButton size="xl" :color="color" type="tertiary"
                >Button xl</BaseButton
            >
        </div>
        <div class="flex space-x-4 items-end">
            <BaseInput size="xs" :color="color" placeholder="Input xs" />
            <BaseInput size="sm" :color="color" placeholder="Input sm" />
            <BaseInput size="md" :color="color" placeholder="Input md" />
            <BaseInput size="lg" :color="color" placeholder="Input lg" />
            <BaseInput size="xl" :color="color" placeholder="Input xl" />
        </div>
        <div class="flex space-x-4 items-end">
            <BaseSelect :color="color" class="w-64" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            color: 'pink',
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
            this.color = value
        },
    },
}
</script>
