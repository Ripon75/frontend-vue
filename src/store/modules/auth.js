import axios from 'axios';

export const auth = {
  state: {
    auth_status: false,
    auth_token: null,
    auth_info: {
        name: '',
        email: '',
        phone_number: ''
    }
  },

  // Get data from state
  getters: {
    GET_AUTH_STATUS(state) {
        return state.auth_status;
    },
    GET_AUTH_TOKEN(state) {
        return state.auth_token;
    },
    GET_AUTH_INFO(state) {
        return state.auth_info;
    }
  },

  // Get data from actons & set data to state
  mutations: {
    // Set auth token when user login
    SET_AUTH_TOKEN(state, payload) {
      state.auth_token = payload;
      state.auth_status = true;
    },

    // Set auth user info when user login
    SET_AUTH_INFO(state, payload) {
      state.auth_info.name = payload.name;
      state.auth_info.email = payload.email;
      state.auth_info.phone_number = payload.phone_number;
    },

    // Reset auth info and token when user logout
    SET_AUTH_LOGOUT(state) {
      state.auth_token = null;
      state.auth_status = false;
      state.auth_info = {
        name: '',
        email: '',
        phone_number: ''
      }
    }
  },

  // Get data by facing api
  actions: {
    // payload means form data
    REGISTER(context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('register', payload)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
      })
    },

    LOGIN(context, payload) {
        return new Promise((resolve, reject) => {
            axios.post('login', payload)
            .then(res => {
              if (res.data.success) {
                context.commit('SET_AUTH_TOKEN', res.data.token)
                context.commit('SET_AUTH_INFO', res.data.result)
              }
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        })
    },

    LOGOUT(context) {
      axios.defaults.headers.common['Authorization'] = 'Bearer '+ context.state.auth_token;

        return new Promise((resolve, reject) => {
            axios.post('logout')
            .then(res => {
              if (res.data.success) {
                context.commit('SET_AUTH_LOGOUT')
              }
              resolve(res);
            })
            .catch(err => {
              reject(err);
            });
        })
    }
  }
}