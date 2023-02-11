<template lang="">
    <div>
        <FrontendLayout v-if="layout === 'frontend'"></FrontendLayout>
        <admin-layout v-if="layout === 'admin'" ></admin-layout>
    </div>
</template>

<script>
import FrontendLayout from './FrontendLayout.vue';
import AdminLayout from './AdminLayout.vue'
export default {
    components: {
        FrontendLayout,
        AdminLayout
    },
    computed: {
        layout() {
            return this.$route.meta.layout;
        }
    }
}
</script>