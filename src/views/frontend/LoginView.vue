
<template lang="">
    <div>
        <!-- Page Header Start -->
        <PageHeader title="Login"></PageHeader>
        <!-- Page Header End -->

        <!-- Contact Start -->
        <div class="container-fluid pt-1">
            <div class="row px-xl-5">
                <div class="col-lg-5 offset-3 mb-5 bg-secondary">
                    <div class="contact-form p-2">
                        <form  novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" class="form-control" placeholder="Your phone number" required="required" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <input type="email" class="form-control" placeholder="Your password"
                                    required="required" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-2 px-4 float-right" type="submit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PageHeader from '@/components/frontend/PageHeader.vue';
export default {
    components: {
        PageHeader
    }
}
</script>