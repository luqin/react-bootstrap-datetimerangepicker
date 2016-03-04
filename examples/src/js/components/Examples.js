import 'bootstrap-daterangepicker/daterangepicker.css';

import React from 'react';
import {
  Alert,
  Grid,
  Glyphicon,
} from 'react-bootstrap';

import DateRangePicker from './examples/DateRangePicker';
import DateAndTime from './examples/DateAndTime';
import SingleDatePicker from './examples/SingleDatePicker';
import PredefinedRanges from './examples/PredefinedRanges';
import InputInitiallyEmpty from './examples/InputInitiallyEmpty';
// import Internationalization from './examples/Internationalization';

class Examples extends React.Component {

  render() {
    return (
      <Grid>
        <h2>Examples</h2>
        <Alert bsStyle="info">
          <Glyphicon glyph="bullhorn" />&nbsp;You can find <a href="https://github.com/luqin/react-bootstrap-datetimerangepicker/tree/master/examples/src/js/components/examples">examples source code</a> here.
        </Alert>
        <hr/>
        <form className="form-horizontal form-bordered">
          <div className="form-body">
            <DateRangePicker/>
            <DateAndTime/>
            <SingleDatePicker/>
            <PredefinedRanges/>
            <InputInitiallyEmpty/>
            {/* <Internationalization/> */}
          </div>
        </form>
      </Grid>
    );
  }
}

export default Examples;
