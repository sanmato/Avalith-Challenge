import React, { Component } from 'react';

//Components
import Header from './Header';
import Content from './Content';
// import { Grid, Row, Col, Navbar } from 'react-bootstrap';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = { filter: "" };
    this.filtrar = this.filtrar.bind(this);
  }
  
  filtrar(e){
    if (e.target.id === "txtSearch") {
      
      this.setState({
        filter: e.target.value
      })
      
    }else{
      this.setState.filter = e.target.id;
      alert("option " + e.target.id);
    }
    
  }
  render() {
    return (
      
      <div className="App">
        <Header />
        <Sidebar Filtering={this.filtrar}/>
        <Content filtro={this.state.filter}/>        
      </div> 
    );
  }
}

export default App;