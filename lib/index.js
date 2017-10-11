'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('bootstrap-daterangepicker');

var _getOptions = require('./getOptions');

var _getOptions2 = _interopRequireDefault(_getOptions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var events = ['Show', 'Hide', 'ShowCalendar', 'HideCalendar', 'Apply', 'Cancel'];

var DatetimeRangePicker = function (_React$Component) {
  (0, _inherits3.default)(DatetimeRangePicker, _React$Component);

  function DatetimeRangePicker(props) {
    (0, _classCallCheck3.default)(this, DatetimeRangePicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DatetimeRangePicker.__proto__ || (0, _getPrototypeOf2.default)(DatetimeRangePicker)).call(this, props));

    _this.state = {};

    _this.$picker = undefined;
    _this.picker = undefined;
    _this.options = (0, _getOptions2.default)();

    _this.handleCallback = _this.handleCallback.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DatetimeRangePicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.$picker = (0, _jquery2.default)(this.refs.picker);
      // initialize
      this.$picker.daterangepicker(this.getOptionsFromProps(), this.handleCallback);
      // attach event listeners
      events.forEach(function (event) {
        var cCase = event.charAt(0).toLowerCase() + event.slice(1);
        _this2.$picker.on(cCase + '.daterangepicker', _this2.makeEventHandler('on' + event));
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
      var _this3 = this;

      var currentOptions = this.getOptionsFromProps();
      var keys = (0, _keys2.default)(currentOptions);
      if (this.$picker) {
        if (currentOptions) {
          keys.forEach(function (key) {
            _this3.applyOptionToPicker(key, currentOptions[key]);
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
      var _this4 = this;

      var options = {};
      var props = this.props;
      var value = void 0;
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
              if (value && (typeof value === 'undefined' ? 'undefined' : (0, _typeof3.default)(value)) === 'object') {
                var picker = _this4.getPicker();
                if (picker) {
                  value = _jquery2.default.extend({}, value, picker.locale);
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
      var _this5 = this;

      return function (event, picker) {
        if (_this5.props.onEvent) {
          _this5.props.onEvent(event, picker);
        }
        if (typeof _this5.props[eventType] === 'function') {
          _this5.props[eventType](event, picker);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      this.setOptionsFromProps();

      return _react2.default.createElement(
        'div',
        { ref: 'picker', style: this.props.style, className: this.props.className },
        this.props.children
      );
    }
  }]);
  return DatetimeRangePicker;
}(_react2.default.Component);

DatetimeRangePicker.propTypes = {

  startDate: _propTypes2.default.any,
  endDate: _propTypes2.default.any,
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  callback: _propTypes2.default.func,
  onEvent: _propTypes2.default.func,
  onShow: _propTypes2.default.func,
  onHide: _propTypes2.default.func,
  onShowCalendar: _propTypes2.default.func,
  onHideCalendar: _propTypes2.default.func,
  onApply: _propTypes2.default.func,
  onCancel: _propTypes2.default.func
};
DatetimeRangePicker.defaultProps = {};
exports.default = DatetimeRangePicker;
module.exports = exports['default'];