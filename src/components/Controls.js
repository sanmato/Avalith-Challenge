import React, { Component } from 'react';
import './css/Controls.css';
import Content from './Content';

class Sidebar extends Component {
  constructor() {
    super(); 
    
    this.state = {
      tech: "Frontend",
      text: ""
    };

    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleFilterClick(e) {
    if (e.target.id === "back") {
        this.setState({
          tech: "Backend"
          
        })
        this.props.controlFilter(e);
    }else {
      this.setState({
        tech: "Frontend"
      })
      this.props.controlFilter(e);
    }
  }

  handleChangeInput(e) {
    this.setState({
      text: e.target.value
      
    })
    this.props.controlFilter(e);
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className="controls">
        <div className="editSearch">
          <input id="txtSearch" placeholder='Search in cards'
          onChange={this.handleChangeInput}></input>
        </div>
        <p>Filter by:</p>
        <form>
          <div className="radio">
            <label>
              <input id="front" type="radio" value="option1" 
              onClick={this.handleFilterClick} />
              Frontend
            </label>
          </div>
          <div className="radio">
            <label>
              <br/>
              <input id="back" type="radio" value="option2"
              onClick={this.handleFilterClick} />
              Backend
            </label>
          </div>
        </form>
      </div> 
    );
  }
}

export default Sidebar;