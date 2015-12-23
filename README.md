# react-bootstrap-datetimerangepicker

[![NPM version][npm-badge]][npm] [![Build Status][travis-ci-image]][travis-ci-url]

[![Dependency Status][deps-badge]][deps]
[![devDependency Status][dev-deps-badge]][dev-deps]
[![peerDependency Status][peer-deps-badge]][peer-deps]

[bootstrap-daterangepicker](https://github.com/dangrossman/bootstrap-daterangepicker)

Online demo: http://luqin.github.io/react-bootstrap-datetimerangepicker

## Features

* 

## Installation

```
npm install react-bootstrap-datetimerangepicker onefe-bootstrap-daterangepicker --save
```

## Usage

import style
```js
import 'onefe-bootstrap-daterangepicker/daterangepicker.css';
```

```js
import DatetimeRangePicker from 'react-bootstrap-datetimerangepicker';

<DateRangePicker
    timePicker
    timePicker24Hour
    showDropdowns
    timePickerSeconds
    locale={locale}
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    onApply={this.handleApply}
    onEvent={this.handleEvent}
>
    <input type="text" value={label}/>
</DateRangePicker>

<DateRangePicker
    startDate={this.state.startDate}
    endDate={this.state.endDate}
    locale={locale}
    onApply={this.handleApply}
>
    <Button>
        <i className="fa fa-calendar"/> &nbsp;
        <span>{label}</span>
        <i className="fa fa-angle-down"/>
    </Button>
</DateRangePicker>
```

More examples: [Online demo](http://luqin.github.io/react-bootstrap-datetimerangepicker), [Source](https://github.com/luqin/react-bootstrap-datetimerangepicker/tree/master/examples)

## Browser support

* Google Chrome
* Firefox (2+)
* IE (9+)
* Opera (11.6+)
* Safari (6+)

## Local Setup

* Install the dependencies with `npm install`
* Run the docs site in development mode with `npm start`. This will watch for file changes as you work. And auto refresh the page to see the updates.

[npm-badge]: http://badge.fury.io/js/react-bootstrap-datetimerangepicker.svg
[npm]: https://www.npmjs.com/package/react-bootstrap-datetimerangepicker

[deps-badge]: https://david-dm.org/luqin/react-bootstrap-datetimerangepicker.svg
[deps]: https://david-dm.org/luqin/react-bootstrap-datetimerangepicker

[dev-deps-badge]: https://david-dm.org/luqin/react-bootstrap-datetimerangepicker/dev-status.svg
[dev-deps]: https://david-dm.org/luqin/react-bootstrap-datetimerangepicker#info=devDependencies

[peer-deps-badge]: https://david-dm.org/luqin/react-bootstrap-datetimerangepicker/peer-status.svg
[peer-deps]: https://david-dm.org/luqin/react-bootstrap-datetimerangepicker#info=peerDependencies 

[travis-ci-image]: https://travis-ci.org/luqin/react-bootstrap-datetimerangepicker.svg
[travis-ci-url]: https://travis-ci.org/luqin/react-bootstrap-datetimerangepicker
