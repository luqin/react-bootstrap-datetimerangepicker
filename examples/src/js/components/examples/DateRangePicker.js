import React from 'react';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';

import {
  Button,
} from 'react-bootstrap';

class DateRangePicker extends React.Component {

  constructor(props) {
    super(props);

    this.handleApply = this.handleApply.bind(this);

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

  handleApply(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  }

  render() {
    let start = this.state.startDate.format('YYYY-MM-DD');
    let end = this.state.endDate.format('YYYY-MM-DD');
    let label = start + ' - ' + end;
    if (start === end) {
      label = start;
    }

    return (
      <div className="form-group">
        <label className="control-label col-md-3">Date Range Picker</label>
        <div className="col-md-4">
          <DatetimeRangePicker
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onApply={this.handleApply}
          >
            <div className="input-group">
              <input type="text" className="form-control" value={label}/>
                <span className="input-group-btn">
                    <Button className="default date-range-toggle">
                      <i className="fa fa-calendar"/>
                    </Button>
                </span>
            </div>
          </DatetimeRangePicker>
        </div>
      </div>
    );
  }

}

export default DateRangePicker;
