import React from 'react';
import $ from 'jquery';
import 'bootstrap-daterangepicker';
import getOptions from './getOptions';

let events = ['Show', 'Hide', 'ShowCalendar', 'HideCalendar', 'Apply', 'Cancel'];

class DatetimeRangePicker extends React.Component {

  static propTypes = {

    startDate: React.PropTypes.any,
    endDate: React.PropTypes.any,
    children: React.PropTypes.any,
    className: React.PropTypes.string,
    style: React.PropTypes.object,

    callback: React.PropTypes.func,
    onEvent: React.PropTypes.func,
    onShow: React.PropTypes.func,
    onHide: React.PropTypes.func,
    onShowCalendar: React.PropTypes.func,
    onHideCalendar: React.PropTypes.func,
    onApply: React.PropTypes.func,
    onCancel: React.PropTypes.func,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};

    this.$picker = undefined;
    this.picker = undefined;
    this.options = getOptions();

    this.handleCallback = this.handleCallback.bind(this);
  }

  componentDidMount() {
    this.$picker = $(this.refs.picker);
    // initialize
    this.$picker.daterangepicker(this.getOptionsFromProps(), this.handleCallback);
    // attach event listeners
    events.forEach(event => {
      let lcase = event.toLowerCase();
      this.$picker.on(lcase + '.daterangepicker', this.makeEventHandler('on' + event));
    });
  }

  componentWillUnmount() {
    this.getPicker().remove();
  }

  setOptionsFromProps() {
    let currentOptions = this.getOptionsFromProps();
    let keys = Object.keys(currentOptions);
    if (this.$picker) {
      if (currentOptions) {
        keys.forEach(key => {
          this.applyOptionToPicker(key, currentOptions[key]);
        });
      }
    }
  }

  getPicker() {
    return this.$picker && this.$picker.data('daterangepicker');
  }

  getOptionsFromProps() {
    let options = {};
    let props = this.props;
    let value;
    this.options.forEach(name => {
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
              let picker = this.getPicker();
              if (picker) {
                value = $.extend({}, value, picker.locale);
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

  applyOptionToPicker(key, value) {
    if (this.$picker) {
      this.$picker.data('daterangepicker')[key] = value;
    }
  }

  handleCallback(start, end) {
    if (typeof this.props.callback === 'function') {
      this.props.callback(start, end);
    }
  }

  makeEventHandler(eventType) {
    return (event, picker) => {
      if (this.props.onEvent) {
        this.props.onEvent(event, picker);
      }
      if (typeof this.props[eventType] === 'function') {
        this.props[eventType](event, picker);
      }
    };
  }

  render() {
    this.setOptionsFromProps();

    return (
      <div ref="picker" style={this.props.style} className={this.props.className}>
        {this.props.children}
      </div>
    );
  }

}

export default DatetimeRangePicker;
