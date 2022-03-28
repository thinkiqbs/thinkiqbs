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
  org1: [],
  userinfo: [],
  employerinfo: [],
  savingtype: [],
  loantype: []
}
var getters = {
  allOrg: function allOrg (state) {
    return state.org1
  },
  allUser: function allUser (state) {
    return state.userinfo
  },
  allEmployer: function allEmployer (state) {
    return state.employerinfo
  },
  allSavinttype: function allSavinttype (state) {
    return state.savingtype
  },
  allLoantype: function allLoantype (state) {
    return state.loantype
  }
}
var actions = {
  fetchOrg: function fetchOrg (_ref) {
    let commit, response
    return regeneratorRuntime.async(function fetchOrg$ (_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit
            _context.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('sys_config/api/v1/OrganizationProfile/')
            )

          case 3:
            response = _context.sent
            commit('setOrg', response.data.results)

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    })
  },
  fetchUserinfo: function fetchUserinfo (_ref2) {
    let commit, response
    return regeneratorRuntime.async(function fetchUserinfo$ (_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            commit = _ref2.commit
            _context2.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/members/api/v1/MemberDetails/')
            )

          case 3:
            response = _context2.sent
            commit('setUserinfo', response.data.results)

          case 5:
          case 'end':
            return _context2.stop()
        }
      }
    })
  },
  fetchEmployerinfo: function fetchEmployerinfo (_ref3) {
    let commit, response
    return regeneratorRuntime.async(function fetchEmployerinfo$ (_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            commit = _ref3.commit
            _context3.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/sys_config/api/v1/EmployerProfile/')
            )

          case 3:
            response = _context3.sent
            commit('setEmployerinfo', response.data.results)

          case 5:
          case 'end':
            return _context3.stop()
        }
      }
    })
  },
  fetchSavingtype: function fetchSavingtype (_ref4) {
    let commit, response
    return regeneratorRuntime.async(function fetchSavingtype$ (_context4) {
      while (1) {
        switch ((_context4.prev = _context4.next)) {
          case 0:
            commit = _ref4.commit
            _context4.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/sys_config/api/v1/SavingsType/')
            )

          case 3:
            response = _context4.sent
            commit('setSavingtype', response.data.results)

          case 5:
          case 'end':
            return _context4.stop()
        }
      }
    })
  },
  fetchLoantype: function fetchLoantype (_ref5) {
    let commit, response
    return regeneratorRuntime.async(function fetchLoantype$ (_context5) {
      while (1) {
        switch ((_context5.prev = _context5.next)) {
          case 0:
            commit = _ref5.commit
            _context5.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/sys_config/api/v1/LoanType/')
            )

          case 3:
            response = _context5.sent
            commit('setLoantype', response.data.results)

          case 5:
          case 'end':
            return _context5.stop()
        }
      }
    })
  }
}
var mutations = {
  setOrg: function setOrg (state, org1) {
    return (state.org1 = org1)
  },
  setUserinfo: function setUserinfo (state, userinfo) {
    return (state.userinfo = userinfo)
  },
  setSavingtype: function setSavingtype (state, savingtype) {
    return (state.savingtype = savingtype)
  },
  setLoantype: function setLoantype (state, loantype) {
    return (state.loantype = loantype)
  },
  setEmployerinfo: function setEmployerinfo (state, employerinfo) {
    return (state.employerinfo = employerinfo)
  }
}
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
exports.default = _default
