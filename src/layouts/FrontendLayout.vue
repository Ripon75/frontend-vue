<template lang="">
        <!-- Topbar Start -->
        <TopBar></TopBar>
        <!-- Topbar End -->

        <!-- Navbar for home page Start -->
        <home-navbar v-if="page === 'home'"></home-navbar>
        <!-- Navbar for others page Start -->
        <common-nav v-else></common-nav>
        <!-- Navbar End -->

        <router-view> </router-view>

        <!-- Footer Start -->
        <FooterBar></FooterBar>
        <!-- Footer End -->
</template>
<script>
import TopBar from "../components/frontend/TopBar.vue"
import CommonNav from '../components/frontend/CommonNav.vue';
import HomeNavbar from '../components/frontend/HomeNavbar.vue';
import FooterBar from "../components/frontend/FooterBar.vue"
export default {
    components: {
        CommonNav,
        HomeNavbar,
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