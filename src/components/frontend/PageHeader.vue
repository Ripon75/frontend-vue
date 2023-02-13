<template lang="">
    <div>
        <div class="container-fluid bg-secondary mb-5">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
                <h1 class="font-weight-semi-bold text-uppercase mb-3">{{ title }}</h1>
                <div class="d-inline-flex">
                    <p class="m-0">
                        <router-link :to="{name: 'home'}">Home</router-link>
                    </p>
                    <p class="m-0 px-2">-</p>
                    <p class="m-0">{{ title }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title']
}
</script>