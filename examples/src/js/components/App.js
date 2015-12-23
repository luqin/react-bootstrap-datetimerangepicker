import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'onefe-bootstrap-daterangepicker/daterangepicker.css';

import React from 'react';

import {
  Grid,
} from 'react-bootstrap';

import DateRangePicker from './DateRangePicker';
import DateAndTime from './DateAndTime';
import SingleDatePicker from './SingleDatePicker';
import PredefinedRanges from './PredefinedRanges';
import InputInitiallyEmpty from './InputInitiallyEmpty';
// import Internationalization from './Internationalization';

class App extends React.Component {

  render() {
    return (
      <Grid>
        <h2>Examples</h2>
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

export default App;
