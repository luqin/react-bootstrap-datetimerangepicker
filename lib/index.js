'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var ReactComponent = (function (_React$Component) {
  _inherits(ReactComponent, _React$Component);

  function ReactComponent() {
    _classCallCheck(this, ReactComponent);

    _get(Object.getPrototypeOf(ReactComponent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ReactComponent, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        'React Component'
      );
    }
  }]);

  return ReactComponent;
})(_react2['default'].Component);

exports['default'] = ReactComponent;
module.exports = exports['default'];