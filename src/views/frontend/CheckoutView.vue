<template lang="">
    <div>
        <!-- Page Header Start -->
        <PageHeader title="Checkout"></PageHeader>
        <!-- Page Header End -->

        <!-- Checkout Start -->
        <div class="container-fluid">
            <div class="row px-xl-5">
                <div class="col-lg-7">
                    <div class="mb-4">
                        <h4 class="font-weight-semi-bold mb-4">Shipping Address</h4>
                        <div class="row">
                            <input type="radio" class="ml-2 mr-2">
                            <div class="col-md-5 form-group border border-success">
                                <span>Home</span> <br>
                                <span>Dhaka-Bangladesh</span> <br>
                                <span>Ramna</span> <br>
                                <span>+8801764997485</span> <br>
                            </div>
                            <input type="radio" class="ml-2 mr-2">
                            <div class="col-md-5 form-group border border-success">
                                <span>Home</span> <br>
                                <span>Dhaka-Bangladesh</span> <br>
                                <span>Ramna</span> <br>
                                <span>+8801764997485</span> <br>
                            </div>
                            <div class="col-md-12 form-group">
                                <div class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="shipto">
                                    <label class="custom-control-label" for="shipto" data-toggle="collapse"
                                        data-target="#shipping-address">Ship to different address</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="collapse mb-4" id="shipping-address">
                        <h4 class="font-weight-semi-bold mb-4">Shipping Address</h4>
                        <div class="row">
                            <div class="col-md-6 form-group">
                                <label>First Name</label>
                                <input class="form-control" type="text" placeholder="John">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Last Name</label>
                                <input class="form-control" type="text" placeholder="Doe">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>E-mail</label>
                                <input class="form-control" type="text" placeholder="example@email.com">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Mobile No</label>
                                <input class="form-control" type="text" placeholder="+123 456 789">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Address Line 1</label>
                                <input class="form-control" type="text" placeholder="123 Street">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Address Line 2</label>
                                <input class="form-control" type="text" placeholder="123 Street">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>Country</label>
                                <select class="custom-select">
                                    <option selected>United States</option>
                                    <option>Afghanistan</option>
                                    <option>Albania</option>
                                    <option>Algeria</option>
                                </select>
                            </div>
                            <div class="col-md-6 form-group">
                                <label>City</label>
                                <input class="form-control" type="text" placeholder="New York">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>State</label>
                                <input class="form-control" type="text" placeholder="New York">
                            </div>
                            <div class="col-md-6 form-group">
                                <label>ZIP Code</label>
                                <input class="form-control" type="text" placeholder="123">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="card border-secondary mb-4">
                        <div class="card-header bg-secondary border-0">
                            <h4 class="font-weight-semi-bold m-0">Order Total</h4>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-between">
                                <h5 class="font-weight-medium mb-3">Products</h5>
                                <h5 class="font-weight-medium mb-3">Price</h5>
                            </div>
                            <div v-for="(item, index) in items" :key="index" class="d-flex justify-content-between">
                                <p>{{ item.name }} ({{ item.pivot.quantity }})</p>
                                <p>{{ currency }} {{ item.pivot.total_price }}</p>
                            </div>
                            <hr class="mt-0">
                            <div class="d-flex justify-content-between mb-3 pt-1">
                                <h6 class="font-weight-medium">Subtotal</h6>
                                <h6 class="font-weight-medium">{{ currency }} {{ totalPrice }}</h6>
                            </div>
                            <div class="d-flex justify-content-between">
                                <h6 class="font-weight-medium">Shipping</h6>
                                <h6 class="font-weight-medium">{{ currency }} 10</h6>
                            </div>
                        </div>
                        <div class="card-footer border-secondary bg-transparent">
                            <div class="d-flex justify-content-between mt-2">
                                <h5 class="font-weight-bold">Total</h5>
                                <h5 class="font-weight-bold">{{ currency }} {{ totalPrice + 10 }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card border-secondary mb-5">
                        <div class="card-header bg-secondary border-0">
                            <h4 class="font-weight-semi-bold m-0">Payment</h4>
                        </div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" :value='1' v-model="orderData.pg_id" id="paypal">
                                    <label class="custom-control-label" for="paypal">Paypal</label>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" :value='2' v-model="orderData.pg_id" id="directcheck">
                                    <label class="custom-control-label" for="directcheck">Direct Check</label>
                                </div>
                            </div>
                            <div class="">
                                <div class="custom-control custom-radio">
                                    <input type="radio" class="custom-control-input" :value='3' v-model="orderData.pg_id" id="banktransfer">
                                    <label class="custom-control-label" for="banktransfer">Bank Transfer</label>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer border-secondary bg-transparent">
                            <button class="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" @click="orderSubmit">
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Checkout End -->
    </div>
</template>
<script>
import PageHeader from '@/components/frontend/PageHeader.vue';
import store from '../../store'
export default {
    components: {
        PageHeader
    },
    data() {
        return {
            items: [],
            orderData: {
                pg_id: 1,
                coupon_id: '',
                address_id: ''
            }
        }
    },
    methods: {
        orderSubmit() {
            var authStatus = store.getters.GET_AUTH_STATUS;
            if (authStatus) {
                this.$store.dispatch('ORDER_SUBMIT', this.orderData)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
            }
        }
    },
    mounted() {
        // Get cart items
        var authStatus = store.getters.GET_AUTH_STATUS;
        if (authStatus) {
            this.$store.dispatch('GET_CART_ITEMS')
            .then(res => {
                if (res.data.success) {
                    this.items = res.data.result.items;
                }
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
    computed: {
        // Calculate cart item total price
        totalPrice() {
        return this.items.reduce((total, item) => {
            return total + parseFloat(item.pivot.total_price);
        }, 0);
        },
    },
}
</script>