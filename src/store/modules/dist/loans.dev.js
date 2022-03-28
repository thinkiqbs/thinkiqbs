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
  loans: []
}
var getters = {
  allLoans: function allLoans (state) {
    return state.loans
  }
}
var actions = {
  fetchLoans: function fetchLoans (_ref) {
    let commit, response
    return regeneratorRuntime.async(function fetchLoans$ (_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit
            _context.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/loans/api/v1/loans/')
            )

          case 3:
            response = _context.sent
            commit('setLoans', response.data.results)

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    })
  }
}
var mutations = {
  setLoans: function setLoans (state, loans) {
    return (state.loans = loans)
  }
}
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
exports.default = _default
