import React, { Component } from 'react';
import avalith from './avalith.png';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
          <img src={avalith} className="App-logo" alt="avalith" />
      </div>

      
    );
  }
}

export default Header;