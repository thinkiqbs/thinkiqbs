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
  members: [],
  deposits: []
}
var getters = {
  allMembers: function allMembers (state) {
    return state.members
  },
  allDeposits: function allDeposits (state) {
    return state.deposits
  }
}
var actions = {
  fetchMembers: function fetchMembers (_ref) {
    let commit, response
    return regeneratorRuntime.async(function fetchMembers$ (_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit
            _context.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/members/api/v1/MemberDetails/')
            )

          case 3:
            response = _context.sent
            commit('setMembers', response.data.results)

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    })
  },
  fetchDeposits: function fetchDeposits (_ref2) {
    let commit, response
    return regeneratorRuntime.async(function fetchDeposits$ (_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            commit = _ref2.commit
            _context2.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/members/api/v1/MonthDeposits/')
            )

          case 3:
            response = _context2.sent
            commit('setDeposits', response.data.results)

          case 5:
          case 'end':
            return _context2.stop()
        }
      }
    })
  }
}
var mutations = {
  setMembers: function setMembers (state, members) {
    return (state.members = members)
  },
  setDeposits: function setDeposits (state, deposits) {
    return (state.deposits = deposits)
  }
}
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
exports.default = _default
