import React, { Component } from 'react';
import './css/Sidebar.css';
import Controls from './Controls';

class Sidebar extends Component {
  constructor() {
    super();   
    this.state = {
    };

    this.filtrar = this.filtrar.bind(this);
  }

  componentDidMount() {

  }

  filtrar(e){
    this.props.Filtering(e);
  }
  
  render() {
    return (
      <div className="sidenav">
        <div className="devname">
          <div className="font-dev-name"><p>SANTIAGO MATO</p></div>
          <div className="font-dev-details">
            <p>DNI 41.307.627</p>
            <p>24 YEARS OLD</p>
          </div>
        </div>
        
        <Controls controlFilter={this.filtrar}/>


      </div> 
    );
  }
}

export default Sidebar;