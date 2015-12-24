import React from 'react';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';
import moment from 'moment';

import {
  Button,
} from 'react-bootstrap';

class Internationalization extends React.Component {

  constructor(props) {
    super(props);

    this.handleEvent = this.handleEvent.bind(this);

    this.state = {
      startDate: moment().subtract(29, 'days'),
      endDate: moment(),
    };
  }

  handleEvent(event, picker) {
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

    let locale = {
      format: 'YYYY-MM-DD',
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Clear',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek(),
    };

    return (
      <div className="form-group">
        <label className="control-label col-md-3">Internationalization</label>
        <div className="col-md-4">
          <DatetimeRangePicker
            autoUpdateInput={false}
            locale={locale}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onEvent={this.handleEvent}
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

export default Internationalization;
