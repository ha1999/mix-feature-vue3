<script>
import Header from "./common/Header.vue"
import Footer from "./common/Footer.vue"
import Modal from '../components/Modal.vue'
export default {
    name: 'MainLayout',
    components: {
    Header,
    Footer,
    Modal
}
}
</script>

<template>
    <Header />
    <main class="w-full bg-gray-300 min-h-65">
        <slot></slot>
    </main>
    <Footer />
    <Modal />
</template>