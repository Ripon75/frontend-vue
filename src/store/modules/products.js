import axios from "axios";

export const products = {
    // Get data by facing api
    actions: {
        // Get all products
        PRODUCTS(context, payload) {
            var page = payload.page;
            var pagination = payload.pagination;
            var paginationSize = payload.pagination_size;
            return new Promise((resolve, reject) => {
                axios.get('products?page='+ page, {
                    params: {
                        pagination: pagination,
                        pagination_size: paginationSize
                        // search_key: this.search_key
                    }
                })
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
            });
        },
        PRODUCT_SINGLE(context, payload) {
            return new Promise((resolve, reject) => {
                axios.get(`products/${payload}`)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
            })
        }
    }
}