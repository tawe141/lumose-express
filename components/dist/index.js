'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _routes = require('./routes.js');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactRouter2.default.run(_routes2.default, _reactRouter2.default.HistoryLocation, function ran(Handler, state) {
    _reactDom2.default.render(_react2.default.createElement(Handler, null), document.getElementById('app-container'));
});
//# sourceMappingURL=index.js.map
