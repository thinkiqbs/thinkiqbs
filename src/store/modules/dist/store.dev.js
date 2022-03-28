'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _vue = _interopRequireDefault(require('vue'))

var _vuex = _interopRequireDefault(require('vuex'))

var _axiosApi = require('@/axios-api.js')

var _vuexPersistedstate = _interopRequireDefault(
  require('vuex-persistedstate')
)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// import axios from 'axios';
_vue.default.use(_vuex.default)

var _default = new _vuex.default.Store({
  plugins: [(0, _vuexPersistedstate.default)()],
  state: {
    accessToken: null,
    refreshToken: null,
    id: null,
    email: null,
    first_name: null,
    company_id: null,
    last_name: null,
    APIData: ''
  },
  mutations: {
    updateStorage: function updateStorage (state, _ref) {
      const access = _ref.access
      const refresh = _ref.refresh
      const email = _ref.email
      const id = _ref.id
      const first_name = _ref.first_name
      const last_name = _ref.last_name
      const company_id = _ref.company_id
      state.accessToken = access
      state.refreshToken = refresh
      state.id = id
      state.email = email
      state.company_id = company_id
      state.first_name = first_name
      state.last_name = last_name // localStorage.setItem("user-token", access); // store the token in localstorage
    },
    destroyToken: function destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  getters: {
    loggedIn: function loggedIn (state) {
      return state.accessToken != null
    }
  },
  actions: {
    userLogout: function userLogout (context) {
      if (context.getters.loggedIn) {
        context.commit('destroyToken') // localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
      }
    },
    userLogin: function userLogin (context, usercredentials) {
      return new Promise(function (resolve, reject) {
        _axiosApi.getAPI
          .post('/dj-rest-auth/login/', {
            username: usercredentials.username,
            password: usercredentials.password
          })
          .then(function (response) {
            context.commit('updateStorage', {
              access: response.data.access_token,
              refresh: response.data.refresh_token,
              id: response.data.user.pk,
              email: usercredentials.username,
              company_id: response.data.results.company_id,
              first_name: response.data.user.first_name,
              last_name: response.data.user.last_name
            })
            resolve()
          })
          .catch(function (err) {
            reject(err)
          })
      })
    }
  }
})

exports.default = _default
