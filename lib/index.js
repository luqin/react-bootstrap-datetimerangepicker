'use strict';

var _get = require('babel-runtime/helpers/get')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('bootstrap-daterangepicker');

var _getOptions = require('./getOptions');

var _getOptions2 = _interopRequireDefault(_getOptions);

var events = ['Show', 'Hide', 'ShowCalendar', 'HideCalendar', 'Apply', 'Cancel'];

var DatetimeRangePicker = (function (_React$Component) {
  _inherits(DatetimeRangePicker, _React$Component);

  _createClass(DatetimeRangePicker, null, [{
    key: 'propTypes',
    value: {

      startDate: _react2['default'].PropTypes.any,
      endDate: _react2['default'].PropTypes.any,
      children: _react2['default'].PropTypes.any,
      className: _react2['default'].PropTypes.string,
      style: _react2['default'].PropTypes.object,

      callback: _react2['default'].PropTypes.func,
      onEvent: _react2['default'].PropTypes.func,
      onShow: _react2['default'].PropTypes.func,
      onHide: _react2['default'].PropTypes.func,
      onShowCalendar: _react2['default'].PropTypes.func,
      onHideCalendar: _react2['default'].PropTypes.func,
      onApply: _react2['default'].PropTypes.func,
      onCancel: _react2['default'].PropTypes.func
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

    this.$picker = undefined;
    this.picker = undefined;
    this.options = (0, _getOptions2['default'])();

    this.handleCallback = this.handleCallback.bind(this);
  }

  _createClass(DatetimeRangePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this = this;

      this.$picker = (0, _jquery2['default'])(this.refs.picker);
      // initialize
      this.$picker.daterangepicker(this.getOptionsFromProps(), this.handleCallback);
      // attach event listeners
      events.forEach(function (event) {
        var lcase = event.toLowerCase();
        _this.$picker.on(lcase + '.daterangepicker', _this.makeEventHandler('on' + event));
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.getPicker().remove();
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
            _this2.applyOptionToPicker(key, currentOptions[key]);
          });
        }
      }
    }
  }, {
    key: 'getPicker',
    value: function getPicker() {
      return this.$picker && this.$picker.data('daterangepicker');
    }
  }, {
    key: 'getOptionsFromProps',
    value: function getOptionsFromProps() {
      var _this3 = this;

      var options = {};
      var props = this.props;
      var value = undefined;
      this.options.forEach(function (name) {
        if (props.hasOwnProperty(name)) {
          value = props[name];

          switch (name) {
            case 'startDate':
            case 'endDate':
              if (value) {
                options[name] = value;
              }
              break;

            case 'locale':
              if (value && typeof value === 'object') {
                var picker = _this3.getPicker();
                if (picker) {
                  value = _jquery2['default'].extend({}, value, picker.locale);
                }
              }
              options[name] = value;
              break;

            default:
              options[name] = value;
          }
        }
      });
      return options;
    }
  }, {
    key: 'applyOptionToPicker',
    value: function applyOptionToPicker(key, value) {
      if (this.$picker) {
        this.$picker.data('daterangepicker')[key] = value;
      }
    }
  }, {
    key: 'handleCallback',
    value: function handleCallback(start, end) {
      if (typeof this.props.callback === 'function') {
        this.props.callback(start, end);
      }
    }
  }, {
    key: 'makeEventHandler',
    value: function makeEventHandler(eventType) {
      var _this4 = this;

      return function (event, picker) {
        if (_this4.props.onEvent) {
          _this4.props.onEvent(event, picker);
        }
        if (typeof _this4.props[eventType] === 'function') {
          _this4.props[eventType](event, picker);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      this.setOptionsFromProps();

      return _react2['default'].createElement(
        'div',
        { ref: 'picker', style: this.props.style, className: this.props.className },
        this.props.children
      );
    }
  }]);

  return DatetimeRangePicker;
})(_react2['default'].Component);

exports['default'] = DatetimeRangePicker;
module.exports = exports['default'];