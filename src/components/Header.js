import React, { Component } from 'react';
import avalith from './avalith.png';
import PropTypes from 'prop-types';
import './css/Header.css';

class Header extends Component {
  constructor() {
    super();

    this.handleClickLogo = this.handleClickLogo.bind(this);
  }

  handleClickLogo(e) {
    this.props.clickHideBar(e);
  }

  render() {
    return (
      <div className="Header">
        <img src={avalith} alt="avalith" onClick={this.handleClickLogo} />
      </div> 
    );
  }
}

export default Header;