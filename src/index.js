import React from 'react';
import $ from 'jquery';
import 'onefe-bootstrap-daterangepicker';
import getOptions from './getOptions';

class DatetimeRangePicker extends React.Component {

  static propTypes = {
    onEvent: React.PropTypes.func,
    children: React.PropTypes.any,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};

    this.$picker = null;
    this.options = getOptions();
  }

  componentDidMount() {
    this.$picker = $(this.refs.picker);
    // initialize
    this.$picker.daterangepicker(this.getOptionsFromProps());
    // attach event listeners
    ['Show', 'Hide', 'ShowCalendar', 'HideCalendar', 'Apply', 'Cancel'].forEach(event => {
      let lcase = event.toLowerCase();
      this.$picker.on(lcase + '.daterangepicker', this.makeEventHandler('on' + event));
    });
  }

  componentWillUnmount() {
    this.$picker.data('daterangepicker').remove();
  }

  setOptionsFromProps() {
    let currentOptions = this.getOptionsFromProps();
    let keys = Object.keys(currentOptions);
    if (this.$picker) {
      if (currentOptions) {
        keys.forEach(key => {
          this.$picker.data('daterangepicker')[key] = currentOptions[key];
        });
      }
    }
  }

  getOptionsFromProps() {
    let options = {};
    let props = this.props;
    this.options.forEach(option => {
      if (props.hasOwnProperty(option)) {
        options[option] = props[option];
      }
    });
    return options;
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

    return React.createElement(
      'div',
      {
        ref: 'picker',
        ...this.props,
      },
      this.props.children
    );
  }

}

export default DatetimeRangePicker;
