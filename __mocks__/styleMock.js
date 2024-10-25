// __mocks__/styleMock.js
module.exports = new Proxy(
  {},
  {
    get: function (target, key) {
      if (key === '__esModule') {
        return false
      }
      return key
    },
  }
)
