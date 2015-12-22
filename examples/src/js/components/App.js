import 'bootstrap/dist/css/bootstrap.css';
import 'onefe-bootstrap-daterangepicker/daterangepicker.css';

import React from 'react';
import moment from 'moment';
import {
  Grid,
  Row,
  Col,
  Button,
  Glyphicon,
} from 'react-bootstrap';
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';

moment.locale('zh-cn');

class App extends React.Component {

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
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
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
    let start = this.state.startDate.format('YYYY-MM-DD');
    let end = this.state.endDate.format('YYYY-MM-DD');
    let label = start + ' - ' + end;
    if (start === end) {
      label = start;
    }

    let locale = {
      format: 'YYYY-MM-DD HH-mm-ss',
      separator: ' - ',
      applyLabel: '确定',
      cancelLabel: '取消',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek(),
    };

    return (
      <Grid>
        <Row>
          <Col md={3}>
            <DatetimeRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onEvent={this.handleEvent}
            >
              <input type="text" name="daterange" value={label}/>
            </DatetimeRangePicker>
          </Col>
          <Col md={3}>
            <DatetimeRangePicker
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              ranges={this.state.ranges}
              onEvent={this.handleEvent}
            >
              <Button className="selected-date-range-btn" style={{ width: '100%' }}>
                <div className="pull-left"><Glyphicon glyph="calendar"/></div>
                <div className="pull-right">
									<span>
										{label}
									</span>
                  <span className="caret"/>
                </div>
              </Button>
            </DatetimeRangePicker>
          </Col>
          <Col md={3}>
            <DatetimeRangePicker
              timePicker
              timePickerSeconds
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              locale={locale}
              onEvent={this.handleEvent}
            >
              <Button className="selected-date-range-btn" style={{ width: '100%' }}>
                <div className="pull-left"><Glyphicon glyph="calendar"/></div>
                <div className="pull-right">
									<span>
										{label}
									</span>
                  <span className="caret"/>
                </div>
              </Button>
            </DatetimeRangePicker>
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;
