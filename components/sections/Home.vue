<template>
    <div>
        <client-only>
            <kinesis-container
                class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                tag="section"
            >
                <div class="w-full h-16 relative z-50">
                    <div class="w-7/12 h-full flex">
                        <social-bar class="self-center" />
                    </div>
                </div>
                <div class="flex flex-wrap h-auto lg:h-screen w-full -mt-16">
                    <div class="w-full lg:w-7/12 flex">
                        <div class="self-center">
                            <p class="text-6xl font-black">
                                Bonjour, bienvenue
                            </p>
                            <p class="text-4xl font-black">
                                Mon nom est
                                <span
                                    :class="`text-${color}-500 transition-colors ease-in-out duration-300`"
                                >
                                    William Donval</span
                                >
                            </p>
                            <p class="text-lg font-medium mt-8">
                                Je suis actuellement étudiant en Licence
                                Professionnelle Développement d'application web
                                & mobile à l'IUT de Lannion
                            </p>
                            <div class="flex space-x-4 mt-16">
                                <BaseButton
                                    :color="color"
                                    size="3xl"
                                    class-names="rounded-full"
                                    >Mon CV
                                </BaseButton>
                                <BaseButton
                                    :color="color"
                                    size="3xl"
                                    type="secondary"
                                    class-names="rounded-full"
                                    >Voir plus</BaseButton
                                >
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-5/12 flex justify-center relative">
                        <kinesis-element
                            style="left: 5%; top: 5%;"
                            class="h-32 w-32 absolute z-40"
                            :strength="18"
                        >
                            <img
                                class="h-full w-full"
                                src="~/assets/images/png/clock2.png"
                                width="100"
                                alt=""
                            />
                        </kinesis-element>
                        <kinesis-element
                            style="bottom: 70%; right: 10%;"
                            class="h-32 w-32 absolute z-40"
                            :strength="32"
                        >
                            <img
                                class="h-full w-full"
                                src="~/assets/images/png/headphones1.png"
                                width="100"
                                alt=""
                            />
                        </kinesis-element>
                        <kinesis-element
                            style="bottom: 30%; left: 5%;"
                            class="h-auto w-48 absolute z-40"
                            :strength="40"
                        >
                            <img
                                class="h-full w-full"
                                src="~/assets/images/png/turntable1.png"
                                width="100"
                                alt=""
                            />
                        </kinesis-element>
                        <kinesis-element
                            style="bottom: 60%; left: 15%;"
                            class="h-16 w-16 absolute z-40"
                            :strength="15"
                        >
                            <img
                                src="~/assets/images/png/cup1.png"
                                width="100"
                                alt=""
                            />
                        </kinesis-element>
                        <kinesis-element
                            style="bottom: 12%; right: 12%;"
                            class="h-24 w-24 absolute z-40"
                            :strength="26"
                        >
                            <img
                                class="h-full w-full"
                                src="~/assets/images/png/joystick2.png"
                                width="100"
                                alt=""
                            />
                        </kinesis-element>
                        <kinesis-element
                            class="h-auto w-full relative z-50 flex"
                            :strength="10"
                        >
                            <img
                                style="height: 48rem;"
                                class="h-auto self-center w-auto mx-auto relative z-50"
                                src="~/assets/images/png/character.png"
                                width="500"
                                alt=""
                            />
                        </kinesis-element>
                    </div>
                </div>
            </kinesis-container>
        </client-only>
    </div>
</template>

<script>
import SocialBar from '@/components/core/SocialBar.vue'

export default {
    components: {
        SocialBar,
    },
    computed: {
        color() {
            return this.$store.state.color.color
        },
        lastColor() {
            return this.$store.state.color.lastColor
        },
    },
}
</script>

<style></style>
