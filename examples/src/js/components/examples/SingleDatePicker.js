import React from 'react';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';

import {
  Button,
} from 'react-bootstrap';

class SingleDatePicker extends React.Component {

  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      startDate: moment().subtract(29, 'days'),
    };
  }

  handleEvent(event, picker) {
    this.setState({
      startDate: picker.startDate,
    });
  }

  render() {
    let label = this.state.startDate.format('YYYY-MM-DD');

    let locale = {
      format: 'YYYY-MM-DD',
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek(),
    };

    let buttonStyle = { width: '100%' };

    return (
      <div className="form-group">
        <label className="control-label col-md-3">Single Date Picker</label>
        <div className="col-md-4">
          <DatetimeRangePicker
            singleDatePicker
            showDropdowns
            locale={locale}
            startDate={this.state.startDate}
            onEvent={this.handleEvent}
          >
            <Button className="selected-date-range-btn" style={buttonStyle}>
              <div className="pull-left">
                <i className="fa fa-calendar"/>
                &nbsp;
                <span>
                  {label}
                </span>
              </div>
              <div className="pull-right">
                <i className="fa fa-angle-down"/>
              </div>
            </Button>
          </DatetimeRangePicker>
        </div>
      </div>
    );
  }

}

export default SingleDatePicker;
