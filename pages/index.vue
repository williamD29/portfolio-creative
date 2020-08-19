<template>
    <div>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
</template>

<script>
import Home from '@/components/sections/Home.vue'
import About from '@/components/sections/About.vue'
import Skills from '@/components/sections/Skills.vue'
import Projects from '@/components/sections/Projects.vue'
import Contact from '@/components/sections/Contact.vue'
import Footer from '@/components/sections/Footer.vue'

export default {
    components: {
        Home,
        About,
        Skills,
        Projects,
        Contact,
        Footer,
    },
}
</script>

<style></style>
