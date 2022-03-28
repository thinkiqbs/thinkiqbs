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
  document: []
}
var getters = {
  allDocuments: function allDocuments (state) {
    return state.document
  }
}
var actions = {
  fetchDocuments: function fetchDocuments (_ref) {
    let commit, response
    return regeneratorRuntime.async(function fetchDocuments$ (_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            commit = _ref.commit
            _context.next = 3
            return regeneratorRuntime.awrap(
              _axios.default.get('/finance/api/v1/documents/')
            )

          case 3:
            response = _context.sent
            commit('setDocuments', response.data.results)

          case 5:
          case 'end':
            return _context.stop()
        }
      }
    })
  }
}
var mutations = {
  setDocuments: function setDocuments (state, document) {
    return (state.document = document)
  }
}
var _default = {
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
}
exports.default = _default
