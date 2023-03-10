import axios from 'axios';

export const cart = {
    // Store data
    state: {
        cart_items: 0
    },
    // Get data from state
    getters: {
        GET_CART_ITEMS(state) {
            return state.cart_items;
        }
    },
    // Get data from actions and set data to state
    mutations: {
        SET_CART_ITEM(state, payload) {
            state.cart_items = state.cart_items + payload;
        },
        UPDATE_CART_ITEM(state, payload) {
            if (payload === 'plus') {
                state.cart_items = state.cart_items + 1;
            }else {
                state.cart_items = state.cart_items - 1;
            }
        }
    },
    // Get data from facing api
    actions: {
        GET_CART_ITEMS(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters.GET_AUTH_TOKEN;
            return new Promise((resolve, reject) => {
                axios.get('get/cart/items')
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
            })
        },
        CART_ITEM_ADD(context, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters.GET_AUTH_TOKEN;
            return new Promise((resolve, reject) => {
                axios.post('add/cart/items', payload)
                .then(res => {
                    if (res.data.success) {
                        context.commit('UPDATE_CART_ITEM', 'plus');
                    }
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                });
            })
        },
        CART_ITEM_QTY_UPDATE(context, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters.GET_AUTH_TOKEN;
            return new Promise((resolve, reject) => {
                axios.post('cart/items/update', payload)
                .then(res => {
                    resolve(res);
                })
                .catch(err => {
                    reject(err)
                });
            })
        },
        CART_ITEM_COUNT(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters.GET_AUTH_TOKEN;
            return new Promise((resolve, reject) => {
                axios.get('count/cart/items')
                .then(res => {
                    if (res.data.success) {
                        var cartItems = res.data.result;
                        context.commit('SET_CART_ITEM', cartItems);
                    }
                    resolve(res);
                })
                .catch(err => {
                    reject(err);
                })
            })
        },
        CART_ITEM_REMOVED(context, payload) {
            axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.getters.GET_AUTH_TOKEN;
            return new Promise((resolve, reject) => {
                axios.post('remove/cart/items', payload)
                .then(res => {
                    if (res.data.success) {
                        context.commit('UPDATE_CART_ITEM', 1)
                    }
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
            })
        }
    }
}