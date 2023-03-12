<template lang="">
    <div>
        <!-- Page Header Start -->
        <PageHeader title="Shopping Cart"></PageHeader>
        <!-- Page Header End -->

        <!-- Cart Start -->
        <div class="container-fluid">
            <div class="row px-xl-5">
                <div class="col-lg-8 table-responsive mb-5">
                    <table class="table table-bordered text-center mb-0">
                        <thead class="bg-secondary text-dark">
                            <tr>
                                <th>Products</th>
                                <th>Size</th>
                                <th>Color</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle">
                            <tr v-for="(item, index) in items" :key="index">
                                <td class="align-middle">
                                    <img :src="item.img_src" :alt="item.name" style="width: 50px;">
                                    {{ item.name }}
                                </td>
                                <td class="align-middle">{{ sizes[index].name }}</td>
                                <td class="align-middle">{{ colors[index].name }}</td>
                                <td class="align-middle">{{ item.pivot.sell_price }}</td>
                                <td class="align-middle">
                                    <div class="input-group quantity mx-auto" style="width: 100px;">
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-primary btn-minus" @click="decrement(index)">
                                                <i class="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" class="form-control form-control-sm bg-secondary text-center"
                                            :value="item.pivot.quantity">
                                        <div class="input-group-btn">
                                            <button class="btn btn-sm btn-primary btn-plus" @click="increment(index)">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td class="align-middle">{{ item.pivot.total_price }}</td>
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-primary" @click="removedItem(index)">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4">
                    <form class="mb-5" action="">
                        <div class="input-group">
                            <input type="text" class="form-control p-4" placeholder="Coupon Code">
                            <div class="input-group-append">
                                <button class="btn btn-primary">Apply Coupon</button>
                            </div>
                        </div>
                    </form>
                    <div class="card border-secondary mb-5">
                        <div class="card-header bg-secondary border-0">
                            <h4 class="font-weight-semi-bold m-0">Cart Summary</h4>
                        </div>
                        <div class="card-body">
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
                            <router-link :to="{name: 'checkout'}" class="btn btn-block btn-primary my-3 py-3">
                                Proceed To Checkout
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Cart End -->
    </div>
</template>
<script>
import PageHeader from '@/components/frontend/PageHeader.vue';
import store from '../../store'
export default {
    name: 'CartView',
    components: {
        PageHeader
    },
    data() {
        return {
            isLoading: false,
            items: [],
            sizes: [],
            colors: [],
        }
    },
    methods: {
        // Increment cart item quantity
        increment(index) {
            var cartItemData = this.getCartItemData(index, 'plus')
            this.updapteQty(cartItemData);
        },
        // Decrement cart item quantity
        decrement(index) {
            var cartItemData = this.getCartItemData(index, 'minus')
            this.updapteQty(cartItemData);
        },
        // Removed cart item
        removedItem(index) {
            var cartItemData = this.getCartItemData(index)
            this.$store.dispatch('CART_ITEM_REMOVED', cartItemData)
            .then()
            .catch(err => {
                console.log(err);
            })

            this.items.splice(index, 1);
        },
        getCartItemData(index, operator = null) {
            var item = this.items[index]
            if (operator === 'plus') {
                item.pivot.quantity++;
            }
            if (operator === 'minus') {
                if (item.pivot.quantity > 1) {
                    item.pivot.quantity--;
                }
            }
            item.pivot.total_price = item.pivot.selling_price * item.pivot.quantity;
            var cartItemData = {
                item_id: item.id,
                quantity: item.pivot.quantity,
                size_id: item.pivot.size_id,
                color_id: item.pivot.color_id,
                selling_price: item.pivot.selling_price
            }

            return cartItemData;
        },
        updapteQty(cartItemData) {
            this.$store.dispatch('CART_ITEM_QTY_UPDATE', cartItemData)
            .then()
            .catch(err => {
                console.log(err);
            })
        },
    },
    mounted() {
        // Get cart items
        var authStatus = store.getters.GET_AUTH_STATUS;
        if (authStatus) {
            this.$store.dispatch('GET_CART_ITEMS')
            .then(res => {
                if (res.data.success) {
                    this.items = res.data.result.items;
                    this.sizes = res.data.result.sizes;
                    this.colors = res.data.result.colors;
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