
<template lang="">
    <div>
        <!-- Page Header Start -->
        <PageHeader title="Registration"></PageHeader>
        <!-- Page Header End -->

        <!-- Contact Start -->
        <div class="container-fluid pt-1">
            <div class="row px-xl-5">
                <div class="col-lg-5 offset-3 mb-5 bg-secondary">
                    <div class="contact-form p-2">
                        <form @submit.prevent="register" novalidate="novalidate">
                            <div class="control-group">
                                <input type="text" v-model="form.name" class="form-control mt-3" placeholder="Your Name" required="required"/>
                                <p class="help-block text-danger">
                                    <small v-if="errors.name">{{ errors.name[0] }}</small>
                                </p>
                            </div>
                            <div class="control-group">
                                <input type="text" v-model="form.phone_number" class="form-control" placeholder="Your phone number"
                                    required="required" />
                                <p class="help-block text-danger">
                                    <small v-if="errors.phone_number">{{ errors.phone_number[0] }}</small>
                                </p>
                            </div>
                            <div class="control-group">
                                <input type="text" v-model="form.email" class="form-control" placeholder="Your Email" />
                                <p class="help-block text-danger">
                                    <small v-if="errors.email">{{ errors.email[0] }}</small>
                                </p>
                            </div>
                            <div class="control-group">
                                <input type="password" v-model="form.password" class="form-control" placeholder="Password" required="required" />
                                <p class="help-block text-danger">
                                    <small v-if="errors.password">{{ errors.password[0] }}</small>
                                </p>
                            </div>
                            <div class="control-group">
                                <input type="password" v-model="form.password_confirmation" class="form-control" placeholder="Password confirmation" required="required" />
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-2 px-4 float-right mb-3" type="button"
                                    :disabled="isLoading"
                                    @click="register">
                                    <span v-if="isLoading" class="spinner-border spinner-border-sm"></span>
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
    },
    data() {
        return {
            isLoading: false,
            form: {
                name: null,
                phone_number: null,
                email: null,
                password: null,
                password_confirmation: null
            },
            errors: {}
        }
    },
    methods: {
        register() {
            this.isLoading = true;
            this.$store.dispatch('REGISTER', this.form)
            .then(res => {
                if (res.data.success) {
                    this._showNotification('success', res.data.msg);
                    this.$router.push({name: 'login'});
                    this.isLoading = false;
                } else {
                    this.isLoading = false;
                    this.errors = res.data.msg;
                }
            })
            .catch(err => {
                this.isLoading = false;
                console.log(err);
            });
        }
    }
}
</script>