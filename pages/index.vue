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
            <BaseToggle :color="color" />
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
