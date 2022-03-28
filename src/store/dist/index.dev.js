'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _vuex = _interopRequireDefault(require('vuex'))

var _vue = _interopRequireDefault(require('vue'))

var _axiosApi = require('@/axios-api.js')

var _loans = _interopRequireDefault(require('@/store/modules/loans.js'))

var _members = _interopRequireDefault(require('@/store/modules/members.js'))

var _documents = _interopRequireDefault(
  require('@/store/modules/documents.js')
)

var _sys_config = _interopRequireDefault(
  require('@/store/modules/sys_config.js')
)

var _banking = _interopRequireDefault(require('@/store/modules/banking.js'))

var _taxes = _interopRequireDefault(require('@/store/modules/taxes.js'))

var _budgets = _interopRequireDefault(require('@/store/modules/budgets.js'))

var _expenses = _interopRequireDefault(require('@/store/modules/expenses.js'))

var _journals = _interopRequireDefault(require('@/store/modules/journals.js'))

var _reports = _interopRequireDefault(require('@/store/modules/reports.js'))

var _gl = _interopRequireDefault(require('@/store/modules/gl.js'))

var _accounting = _interopRequireDefault(
  require('@/store/modules/accounting.js')
)

var _vuexPersistedstate = _interopRequireDefault(
  require('vuex-persistedstate')
)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// loadVuex
_vue.default.use(_vuex.default) // Create Store

var _default = new _vuex.default.Store({
  plugins: [(0, _vuexPersistedstate.default)()],
  state: {
    accessToken: null,
    refreshToken: null,
    // company_id: null,
    id: null,
    email: null,
    first_name: null,
    last_name: null,
    APIData: '',
    is_member: ''
  },
  mutations: {
    updateStorage: function updateStorage (state, _ref) {
      const access = _ref.access
      const refresh = _ref.refresh
      const email = _ref.email
      const id = _ref.id
      const first_name = _ref.first_name
      const last_name = _ref.last_name
      state.accessToken = access
      state.refreshToken = refresh
      state.id = id
      state.email = email
      state.first_name = first_name
      state.last_name = last_name // localStorage.setItem("user-token", access); // store the token in localstorage
    },
    destroyToken: function destroyToken (state) {
      state.accessToken = null
      state.refreshToken = null
    },
    company: function company (state, orgProfile) {
      state.company_id = orgProfile
      console.log(orgProfile)
    },
    ismember: function ismember (state, membercount) {
      state.is_member = membercount
      console.log(membercount)
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
              first_name: response.data.user.first_name,
              last_name: response.data.user.last_name
            })
            resolve()
          })
          .catch(function (err) {
            reject(err)
          })
      })
    },
    company: function company (_ref2) {
      const commit = _ref2.commit

      _axiosApi.getAPI
        .get('/sys_config/api/v1/OrganizationProfile/', {
          params: {}
        })
        .then(function (res) {
          commit('company', res.data.results)
        })
    },
    ismember: function ismember (_ref3) {
      const commit = _ref3.commit

      _axiosApi.getAPI
        .get('/members/api/v1/MemberDetails/', {
          params: {}
        })
        .then(function (res) {
          commit('ismember', res.data.results)
        })
    }
  },
  modules: {
    a: _loans.default,
    b: _members.default,
    c: _documents.default,
    d: _sys_config.default,
    e: _banking.default,
    f: _taxes.default,
    g: _budgets.default,
    h: _expenses.default,
    i: _journals.default,
    j: _reports.default,
    k: _gl.default,
    l: _accounting.default
  }
})

exports.default = _default
