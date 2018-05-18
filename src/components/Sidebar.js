import React, { Component } from 'react';
import './css/Sidebar.css';
import Controls from './Controls';

class Sidebar extends Component {
  
  render() {
    return (
      <div className="sidenav">
        <div className="devname">
          <div className="font-dev-name"><p>DEV NAME</p></div>
          <div className="font-dev-details">
            <p>DNI 41.307.627</p>
            <p>24 YEARS OLD</p>
          </div>
        </div>
        
        <Controls />


      </div> 
    );
  }
}

export default Sidebar;