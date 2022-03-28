'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = void 0

var _axios = _interopRequireDefault(require('axios'))

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var state = {
  gl: [],
  accountmaster: []
}
var getters = {
  allGl: function allGl (state) {
    return state.gl
  },
  allAccountmaster: function allAccountmaster (state) {
    return state.accountmaster
  }
}
var actions = {
  fetchGl: function fetchGl (_ref) {
    let commit, response
    return regeneratorRuntime.async(function fetchGl$ (_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit
            _context.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/Chartofaccounts/')
            )

          case 3:
            response = _context.sent
            commit('setGl', response.data.results)

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    })
  },
  fetchAccountmaster: function fetchAccountmaster (_ref2) {
    let commit, response
    return regeneratorRuntime.async(function fetchAccountmaster$ (_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            commit = _ref2.commit
            _context2.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/accountmaster/')
            )

          case 3:
            response = _context2.sent
            commit('setAccountmaster', response.data.results)

          case 5:
          case 'end':
            return _context2.stop()
        }
      }
    })
  }
}
var mutations = {
  setGl: function setGl (state, gl) {
    return (state.gl = gl)
  },
  setAccountmaster: function setAccountmaster (state, accountmaster) {
    return (state.accountmaster = accountmaster)
  }
}
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
exports.default = _default
