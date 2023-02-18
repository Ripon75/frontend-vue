
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
                        <form  novalidate="novalidate" @submit.prevent="login">
                            <div class="control-group">
                                <input type="text" v-model="form.phone_number" class="form-control mt-3" placeholder="Your phone number" required="required" />
                                <p class="help-block text-danger">
                                    <span v-if="errors.phone_number">{{ errors.phone_number[0] }}</span>
                                </p>
                            </div>
                            <div class="control-group">
                                <input type="password" v-model="form.password" class="form-control" placeholder="Your password"
                                    required="required" />
                                <p class="help-block text-danger">
                                    <span v-if="errors.password">{{ errors.password[0] }}</span>
                                </p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-2 px-4 float-right mb-3" type="submit">
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
    name: 'LoginView',
    components: {
        PageHeader
    },
    data() {
        return {
            form: {
                phone_number: null,
                password: null
            },
            errors: {},
            not_match: null
        }
    },
    methods: {
        login() {
            this.$store.dispatch('LOGIN', this.form)
            .then(res => {
                if (res.data.success) {
                    this.showNotification('success', 'Login successfully');
                    this.$router.push({name: 'Home'})
                } else {
                    this.errors = res.data.msg;
                    if (typeof this.errors !== 'object') {
                        this.not_match = res.data.msg
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    }
}
</script>