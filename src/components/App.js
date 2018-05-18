import React, { Component } from 'react';

//componentes
import Header from './Header';
import Content from './Content';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import Sidebar from './Sidebar';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Header />
        <Sidebar />
        <Content />        
      </div> 
    );
  }
}

export default App;