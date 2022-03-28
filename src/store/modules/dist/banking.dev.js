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
  Banktransactions: [],
  paymentsmade: [],
  paymentsreceived: [],
  Banks: []
}
var getters = {
  allBanktransactions: function allBanktransactions (state) {
    return state.Banktransactions
  },
  allPaymentsmade: function allPaymentsmade (state) {
    return state.paymentsmade
  },
  allPaymentsreceived: function allPaymentsreceived (state) {
    return state.paymentsreceived
  },
  allBanks: function allBanks (state) {
    return state.Banks
  }
}
var actions = {
  fetchBanktransactions: function fetchBanktransactions (_ref) {
    let commit, response
    return regeneratorRuntime.async(function fetchBanktransactions$ (_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit
            _context.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/Bank_transactions/')
            )

          case 3:
            response = _context.sent
            commit('setBanktransactions', response.data.results)

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    })
  },
  fetchPaymentsmade: function fetchPaymentsmade (_ref2) {
    let commit, response
    return regeneratorRuntime.async(function fetchPaymentsmade$ (_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            commit = _ref2.commit
            _context2.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/Payments/')
            )

          case 3:
            response = _context2.sent
            commit('setpaymentsmade', response.data.results)

          case 5:
          case 'end':
            return _context2.stop()
        }
      }
    })
  },
  fetchPaymentsreceived: function fetchPaymentsreceived (_ref3) {
    let commit, response
    return regeneratorRuntime.async(function fetchPaymentsreceived$ (_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            commit = _ref3.commit
            _context3.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/PaymentsReceived/')
            )

          case 3:
            response = _context3.sent
            commit('setpaymentsreceived', response.data.results)

          case 5:
          case 'end':
            return _context3.stop()
        }
      }
    })
  },
  fetchBanks: function fetchBanks (_ref4) {
    let commit, response
    return regeneratorRuntime.async(function fetchBanks$ (_context4) {
      while (1) {
        switch ((_context4.prev = _context4.next)) {
          case 0:
            commit = _ref4.commit
            _context4.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/Bank/')
            )

          case 3:
            response = _context4.sent
            commit('setBanks', response.data.results)

          case 5:
          case 'end':
            return _context4.stop()
        }
      }
    })
  }
}
var mutations = {
  setBanktransactions: function setBanktransactions (state, Banktransactions) {
    return (state.Banktransactions = Banktransactions)
  },
  setpaymentsmade: function setpaymentsmade (state, paymentsmade) {
    return (state.paymentsmade = paymentsmade)
  },
  setpaymentsreceived: function setpaymentsreceived (state, paymentsreceived) {
    return (state.paymentsreceived = paymentsreceived)
  },
  setBanks: function setBanks (state, Banks) {
    return (state.Banks = Banks)
  }
}
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
exports.default = _default
