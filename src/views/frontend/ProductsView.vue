<template lang="">
    <div>
        <!-- Page Header Start -->
        <PageHeader title="Products"></PageHeader>
        <!-- Page Header End -->

        <!-- Products Start -->
        <div class="container-fluid pt-5">
            <div class="row px-xl-5">
                <!-- Products Sidebar Start -->
                <div class="col-lg-3 col-md-12">
                    <!-- Price Start -->
                    <div class="border-bottom mb-4 pb-4">
                        <h5 class="font-weight-semi-bold mb-4">Filter by price</h5>
                        <form>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" checked id="price-all">
                                <label class="custom-control-label" for="price-all">All Price</label>
                                <span class="badge border font-weight-normal">1000</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="price-1">
                                <label class="custom-control-label" for="price-1">$0 - $100</label>
                                <span class="badge border font-weight-normal">150</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="price-2">
                                <label class="custom-control-label" for="price-2">$100 - $200</label>
                                <span class="badge border font-weight-normal">295</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="price-3">
                                <label class="custom-control-label" for="price-3">$200 - $300</label>
                                <span class="badge border font-weight-normal">246</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="price-4">
                                <label class="custom-control-label" for="price-4">$300 - $400</label>
                                <span class="badge border font-weight-normal">145</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" class="custom-control-input" id="price-5">
                                <label class="custom-control-label" for="price-5">$400 - $500</label>
                                <span class="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                    <!-- Price End -->

                    <!-- Color Start -->
                    <div class="border-bottom mb-4 pb-4">
                        <h5 class="font-weight-semi-bold mb-4">Filter by color</h5>
                        <form>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" checked id="color-all">
                                <label class="custom-control-label" for="price-all">All Color</label>
                                <span class="badge border font-weight-normal">1000</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="color-1">
                                <label class="custom-control-label" for="color-1">Black</label>
                                <span class="badge border font-weight-normal">150</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="color-2">
                                <label class="custom-control-label" for="color-2">White</label>
                                <span class="badge border font-weight-normal">295</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="color-3">
                                <label class="custom-control-label" for="color-3">Red</label>
                                <span class="badge border font-weight-normal">246</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="color-4">
                                <label class="custom-control-label" for="color-4">Blue</label>
                                <span class="badge border font-weight-normal">145</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" class="custom-control-input" id="color-5">
                                <label class="custom-control-label" for="color-5">Green</label>
                                <span class="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                    <!-- Color End -->

                    <!-- Size Start -->
                    <div class="mb-5">
                        <h5 class="font-weight-semi-bold mb-4">Filter by size</h5>
                        <form>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" checked id="size-all">
                                <label class="custom-control-label" for="size-all">All Size</label>
                                <span class="badge border font-weight-normal">1000</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="size-1">
                                <label class="custom-control-label" for="size-1">XS</label>
                                <span class="badge border font-weight-normal">150</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="size-2">
                                <label class="custom-control-label" for="size-2">S</label>
                                <span class="badge border font-weight-normal">295</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="size-3">
                                <label class="custom-control-label" for="size-3">M</label>
                                <span class="badge border font-weight-normal">246</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                <input type="checkbox" class="custom-control-input" id="size-4">
                                <label class="custom-control-label" for="size-4">L</label>
                                <span class="badge border font-weight-normal">145</span>
                            </div>
                            <div
                                class="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                <input type="checkbox" class="custom-control-input" id="size-5">
                                <label class="custom-control-label" for="size-5">XL</label>
                                <span class="badge border font-weight-normal">168</span>
                            </div>
                        </form>
                    </div>
                    <!-- Size End -->
                </div>
                <!-- Products Sidebar End -->

                <!-- Products Product Start -->
                <div class="col-lg-9 col-md-12">
                    <div class="row pb-3">
                        <ProductComponent v-for="product in products" :key="product.id"
                            :id="product.id"
                            :name="product.name"
                            :slug="product.slug"
                            :img_src="product.img_src"
                            :price="product.price"
                            :offer_price="product.offer_price">
                        </ProductComponent>

                        <div class="col-12 pb-1">
                            <nav aria-label="Page navigation">
                                <ul class="pagination justify-content-center mb-3">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">&laquo;</span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">&raquo;</span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <!-- Shop Product End -->
            </div>
        </div>
        <!-- Shop End -->
    </div>
</template>
<script>
import PageHeader from '@/components/frontend/PageHeader.vue';
import ProductComponent from '../../components/frontend/ProductComponent.vue'
export default {
    components: {
        PageHeader,
        ProductComponent
    },
    data() {
        return {
        products: []
        }
    },
    mounted() {
        this.$store.dispatch('PRODUCTS')
        .then(res => {
            console.log(res);
            if (res.data.success) {
                var products = res.data.result.data;
                this.products = products;
            }
        })
        .catch(err => {
            console.log(err);
        })
    },
}
</script>