'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _vuex = _interopRequireDefault(require('vuex'))

var _vue = _interopRequireDefault(require('vue'))

var _axiosApi = require('@/axios-api.js')

var _vuexPersistedstate = _interopRequireDefault(
  require('vuex-persistedstate')
)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// loadVuex
// Create Store
_vue.default.use(_vuex.default)

var _default = new _vuex.default.Store({
  plugins: [(0, _vuexPersistedstate.default)()],
  state: {
    loans: ''
  },
  mutations: {
    all_loans: function all_loans (state, orgProfile) {
      state.loans = orgProfile
      console.log(orgProfile)
    }
  },
  getters: {},
  actions: {
    all_loans: function all_loans (_ref) {
      const commit = _ref.commit

      _axiosApi.getAPI
        .get('/loans/api/v1/loans/', {
          params: {
            company_id: this.state.company_id
          }
        })
        .then(function (res) {
          commit('all_loans', res.data.results) // console.log("myloans:",this.all_loans)
        })
    }
  }
})

exports.default = _default
