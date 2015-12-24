import React from 'react';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';

import {
  Button,
} from 'react-bootstrap';

class InputInitiallyEmpty extends React.Component {

  constructor(props) {
    super(props);

    this.handleApply = this.handleApply.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      startDate: undefined,
      endDate: undefined,
    };
  }

  handleApply(event, picker) {
    this.setState({
      startDate: picker.startDate,
      endDate: picker.endDate,
    });
  }

  handleCancel() {
    this.setState({
      startDate: undefined,
      endDate: undefined,
    });
  }

  render() {
    let { startDate, endDate } = this.state;

    let label = '';
    let start = startDate && startDate.format('YYYY-MM-DD') || '';
    let end = endDate && endDate.format('YYYY-MM-DD') || '';
    label = start + ' - ' + end;
    if (start === end) {
      label = start;
    }

    let locale = {
      format: 'YYYY-MM-DD',
      cancelLabel: 'Clear',
    };

    let pickerProps = {
      startDate,
      endDate,
    };

    return (
      <div className="form-group">
        <label className="control-label col-md-3">Input Initially Empty</label>
        <div className="col-md-4">
          <DatetimeRangePicker
            autoUpdateInput={false}
            locale={locale}
            onApply={this.handleApply}
            onCancel={this.handleCancel}
            {...pickerProps}
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

export default InputInitiallyEmpty;
