<template>
    <div>
        <ul class="flex space-x-12">
            <li class="font-medium">
                <a class="relative" href="#">Github</a>
            </li>
            <li class="font-medium">
                <a class="relative" href="#">Gitlab</a>
            </li>
            <li class="font-medium">
                <a class="relative" href="#">Linkedin</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
a::after {
    content: '';
    position: absolute;
    bottom: -2px;
    right: 0;
    width: 0;
    height: 1px;
    background-color: currentColor;
    transition: width 0.25s;
}

li:hover a::after {
    width: 100%;
    left: 0;
}
</style>
