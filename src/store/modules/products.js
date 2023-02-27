import axios from "axios";

export const products = {
    // Store data
    state: {
        products: {}
    },

    // Get data from state
    getters: {
        GET_PRODUCT(state) {
            return state.products;
        }
    },

    // Get data from actons & set data to state
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload
        }
    },

    // Get data by facing api
    actions: {
        // Get all products
        PRODUCTS(context) {
            return new Promise((resolve, reject) => {
                axios.get('products')
                .then(res => {
                    if (res.data.success) {
                        context.commit('SET_PRODUCTS', res.data.result.data)
                    }
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
            });
        },
        PRODUCT_SINGLE(context, id) {
            return new Promise((resolve, reject) => {
                axios.get(`products/${id}`)
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