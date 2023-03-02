import axios from 'axios';

export const cart = {
    // Store data
    state: {

    },
    // Get data from state
    getters: {

    },
    // Get data from actions and set data to state
    mutations: {

    },
    // Get data from facing api
    actions: {
        CART_ITEM_ADD(context, payload) {
            return new Promise((resolve, reject) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters.GET_AUTH_TOKEN;
                axios.post('cart/item/add', payload)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                });
            })
        }
    }
}