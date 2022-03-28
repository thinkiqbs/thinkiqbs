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
    members: ''
  },
  mutations: {
    members: function members (state, orgProfile) {
      state.members = orgProfile
      console.log(orgProfile)
    }
  },
  getters: {},
  actions: {
    members: function members (_ref) {
      const commit = _ref.commit

      _axiosApi.getAPI
        .get('/members/api/v1/MemberDetails/', {
          params: {}
        })
        .then(function (res) {
          commit('members', res.data.results)
        })
    }
  }
})

exports.default = _default
