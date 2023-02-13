<template lang="">
    <div>
        <!-- Page Header Start -->
        <PageHeader title="Wishlist"></PageHeader>
        <!-- Page Header End -->

        <!-- Cart Start -->
        <div class="container-fluid pt-5">
            <div class="row px-xl-5">
                <div class="col-lg-10 offset-1 table-responsive mb-5">
                    <table class="table table-bordered text-center mb-0">
                        <thead class="bg-secondary text-dark">
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle">
                            <tr>
                                <td class="align-middle">
                                    <img src="frontend/img/product-1.jpg" alt="" style="width: 50px;">
                                    Colorful Stylish Shirt
                                </td>
                                <td class="align-middle">$150</td>
                                <td class="align-middle">Category</td>
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-secondary mr-2">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-middle">
                                    <img src="frontend/img/product-2.jpg" alt="" style="width: 50px;">
                                    Colorful Stylish Shirt</td>
                                <td class="align-middle">$150</td>
                                <td class="align-middle">Category</td>
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-secondary mr-2">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-middle">
                                    <img src="frontend/img/product-3.jpg" alt="" style="width: 50px;">
                                    Colorful Stylish Shirt</td>
                                <td class="align-middle">$150</td>
                                <td class="align-middle">Category</td>
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-secondary mr-2">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-middle"><img src="frontend/img/product-4.jpg" alt="" style="width: 50px;">
                                    Colorful Stylish Shirt</td>
                                <td class="align-middle">$150</td>
                                <td class="align-middle">Category</td>
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-secondary mr-2">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td class="align-middle">
                                    <img src="frontend/img/product-5.jpg" alt="" style="width: 50px;">
                                    Colorful Stylish Shirt</td>
                                <td class="align-middle">$150</td>
                                <td class="align-middle">Category</td>
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-secondary mr-2">
                                        <i class="fa fa-eye"></i>
                                    </button>
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- Cart End -->
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