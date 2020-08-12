<template>
    <kinesis-container class="overflow-hidden">
        <div class="w-full h-16 relative z-50">
            <div class="w-7/12 h-full flex justify-center">
                <social-bar class="w-8/12 self-center" />
            </div>
        </div>
        <div class="flex h-screen w-full -mt-16">
            <div class="w-7/12 flex justify-center">
                <div class="w-8/12 self-center">
                    <p class="text-6xl font-black">Bonjour, bienvenue</p>
                    <p class="text-4xl font-black">
                        Mon nom est William Donval
                    </p>
                    <p class="text-lg font-medium mt-8">
                        Je suis actuellement étudiant en Licence Professionnelle
                        Développement d'application web & mobile
                    </p>
                    <div class="flex space-x-4 mt-16">
                        <BaseButton
                            :color="color"
                            size="3xl"
                            class-names="rounded-full"
                            >Mon CV
                            <svg
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                class="document-text w-6 h-6 ml-2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                ></path></svg
                        ></BaseButton>
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
            <div class="w-5/12 flex justify-center relative">
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
                    class="h-48 w-48 absolute z-40"
                    :strength="23"
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
                    class="h-full w-full relative z-50 flex"
                    :strength="10"
                >
                    <img
                        class="self-center h-10/12 w-auto mx-auto relative z-50"
                        src="~/assets/images/png/character.png"
                        width="500"
                        alt=""
                    />
                </kinesis-element>
            </div>
        </div>
    </kinesis-container>
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
    },
}
</script>

<style></style>
