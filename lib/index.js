'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('onefe-bootstrap-daterangepicker');

var _getOptions = require('./getOptions');

var _getOptions2 = _interopRequireDefault(_getOptions);

var DatetimeRangePicker = (function (_React$Component) {
  _inherits(DatetimeRangePicker, _React$Component);

  _createClass(DatetimeRangePicker, null, [{
    key: 'propTypes',
    value: {
      onEvent: _react2['default'].PropTypes.func,
      children: _react2['default'].PropTypes.any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {},
    enumerable: true
  }]);

  function DatetimeRangePicker(props) {
    _classCallCheck(this, DatetimeRangePicker);

    _get(Object.getPrototypeOf(DatetimeRangePicker.prototype), 'constructor', this).call(this, props);
    this.state = {};

    this.$picker = null;
    this.options = (0, _getOptions2['default'])();
  }

  _createClass(DatetimeRangePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      this.$picker = (0, _jquery2['default'])(this.refs.picker);
      // initialize
      this.$picker.daterangepicker(this.getOptionsFromProps());
      // attach event listeners
      ['Show', 'Hide', 'ShowCalendar', 'HideCalendar', 'Apply', 'Cancel'].forEach(function (event) {
        var lcase = event.toLowerCase();
        _this.$picker.on(lcase + '.daterangepicker', _this.makeEventHandler('on' + event));
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.$picker.data('daterangepicker').remove();
    }
  }, {
    key: 'setOptionsFromProps',
    value: function setOptionsFromProps() {
      var _this2 = this;

      var currentOptions = this.getOptionsFromProps();
      var keys = _Object$keys(currentOptions);
      if (this.$picker) {
        if (currentOptions) {
          keys.forEach(function (key) {
            _this2.$picker.data('daterangepicker')[key] = currentOptions[key];
          });
        }
      }
    }
  }, {
    key: 'getOptionsFromProps',
    value: function getOptionsFromProps() {
      var options = {};
      var props = this.props;
      this.options.forEach(function (option) {
        if (props.hasOwnProperty(option)) {
          options[option] = props[option];
        }
      });
      return options;
    }
  }, {
    key: 'makeEventHandler',
    value: function makeEventHandler(eventType) {
      var _this3 = this;

      return function (event, picker) {
        if (_this3.props.onEvent) {
          _this3.props.onEvent(event, picker);
        }
        if (typeof _this3.props[eventType] === 'function') {
          _this3.props[eventType](event, picker);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      this.setOptionsFromProps();

      return _react2['default'].createElement('div', _extends({
        ref: 'picker'
      }, this.props), this.props.children);
    }
  }]);

  return DatetimeRangePicker;
})(_react2['default'].Component);

exports['default'] = DatetimeRangePicker;
module.exports = exports['default'];