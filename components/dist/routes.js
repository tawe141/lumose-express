'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _test = require('./test.js');

var _test2 = _interopRequireDefault(_test);

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', handler: _app2.default },
    _react2.default.createElement(_reactRouter.DefaultRoute, { handler: _test2.default })
);
//# sourceMappingURL=routes.js.map
