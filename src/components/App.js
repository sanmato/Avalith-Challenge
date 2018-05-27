import React, { Component } from 'react';
//componentes

import Header from './Header';
import Content from './Content';
// import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import Sidebar from './Sidebar';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      filter: "",
      visibleBar: true
      // mode: "Dashboard" 
    };
    this.filtrar = this.filtrar.bind(this);
    this.setVisibleBar = this.setVisibleBar.bind(this);
  }

  
  
  filtrar(e){
    this.setState({
      filter: e.target.value
    })
  }

  setVisibleBar(e) {
    this.setState({
      visibleBar: !this.state.visibleBar
    })
    // alert("ser visible bar");
  }

  // sideIsVisible() {
  //   const visibleBar = true;    
  //   alert ("show bar");
  //   if (visibleBar === true) {
  //     alert ("show bar");
  //     return <Sidebar Filtering={this.filtrar}/>       
  //   }
  // }

  render() {
    const visibleBar = this.state.visibleBar;
    const bar = visibleBar ? (
      <Sidebar Filtering={this.filtrar} logoHideBar={this.state.visibleBar}/>
    ) : <div></div> 
    return (
      
      <div className="App">
        <Header clickHideBar={this.setVisibleBar}/>
        {bar}
        {/* <Sidebar Filtering={this.filtrar}/> */}


        <Content filtro={this.state.filter } visibleBar={this.state.visibleBar}/>        
      </div> 
    );
  }
}

export default App;