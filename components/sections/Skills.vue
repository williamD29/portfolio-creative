<template>
    <div style="white-space: normal;" class="max-w-7xl mx-auto">
        <h1
            style="white-space: normal;"
            :class="`text-${color}-500`"
            class="text-width font-bold transition-colors ease-in-out duration-300"
        >
            Compétences&nbsp;—
        </h1>
    </div>
</template>

<script>
export default {
    computed: {
        color() {
            return this.$store.state.color.color
        },
    },
}
</script>

<style></style>
