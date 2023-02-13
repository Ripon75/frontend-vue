<template lang="">
        <!-- Topbar Start -->
        <TopBar></TopBar>
        <!-- Topbar End -->

        <!-- Navbar for home page Start -->
        <NavBar v-if="page === 'home'" show="show"></NavBar>
        <NavBar v-else display="d-none"></NavBar>
        <!-- Navbar End -->

        <!-- Dynamic component load -->
        <router-view> </router-view>

        <!-- Footer Start -->
        <FooterBar></FooterBar>
        <!-- Footer End -->
</template>
<script>
import TopBar from "../components/frontend/TopBar.vue"
import NavBar from '../components/frontend/NavBar.vue';
import FooterBar from "../components/frontend/FooterBar.vue"
export default {
    components: {
        NavBar,
        FooterBar,
        TopBar
    },
    computed: {
        page() {
            return this.$route.meta.page;
        }
    }
}
</script>