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
  expenses: []
}
var getters = {
  allExpenses: function allExpenses (state) {
    return state.expenses
  }
}
var actions = {
  fetchExpenses: function fetchExpenses (_ref) {
    let commit, response
    return regeneratorRuntime.async(function fetchExpenses$ (_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit
            _context.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/Expenses/')
            )

          case 3:
            response = _context.sent
            commit('setExpenses', response.data.results)

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    })
  }
}
var mutations = {
  setExpenses: function setExpenses (state, expenses) {
    return (state.expenses = expenses)
  }
}
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
exports.default = _default
