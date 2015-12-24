import React from 'react';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';

import {
  Button,
} from 'react-bootstrap';

class PredefinedRanges extends React.Component {

  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
      ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
      },
    };
  }

  handleEvent(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  }

  render() {
    let start = this.state.startDate.format('MMMM D, YYYY');
    let end = this.state.endDate.format('MMMM D, YYYY');
    let label = start + ' - ' + end;
    if (start === end) {
      label = start;
    }

    let buttonStyle = { width: '100%' };

    return (
      <div className="form-group">
        <label className="control-label col-md-3">Predefined Ranges</label>
        <div className="col-md-4">
          <DatetimeRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            ranges={this.state.ranges}
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

export default PredefinedRanges;
