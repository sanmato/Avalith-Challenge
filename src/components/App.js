import React, { Component } from 'react';
//componentes

import Header from './Header';
import Content from './Content';
import Sidebar from './Sidebar';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      filter: "",
      visibleBar: true
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
  }


  render() {
    const visibleBar = this.state.visibleBar;
    const bar = visibleBar ? (
      <Sidebar Filtering={this.filtrar} logoHideBar={this.state.visibleBar}/>
    ) : <div></div> 
    return (
      
      <div className="App">
        <Header clickHideBar={this.setVisibleBar}/>
        {bar}


        <Content filtro={this.state.filter } visibleBar={this.state.visibleBar}/>        
      </div> 
    );
  }
}

export default App;