import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import React from 'react';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <div>
        <Navbar inverse staticTop toggleNavKey={0}>
          <NavBrand><a href="#">React Bootstrap Date&Time Range Picker</a></NavBrand>
          <Nav>
            <NavItem
              eventKey={2}
              href="//github.com/luqin/react-bootstrap-datetimerangepicker"
              target="_blank"
            >
              GitHub
            </NavItem>
          </Nav>
        </Navbar>

        {this.props.children}
      </div>
    );
  }

}

export default App;
