import React, { Component } from 'react';
import './css/Controls.css';
import Content from './Content';
import TextField from '@material-ui/core/TextField'

class Controls extends Component {
  constructor() {
    super(); 
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }

  handleChangeInput(e) {
    this.props.controlFilter(e);
  }

  render() {
    return (
      <div className="controls">
         {/* <div className="editSearch">
          <input id="txtSearch" placeholder='Search in cards'
          onChange={this.handleChangeInput}></input>
        </div> */}
        {/* <div className="editSearch"> */}
          <TextField 
            className="editSearch"
            label ="Search in Cards" 
            placeholder="Search in Cards"
            onChange={this.handleChangeInput}/>
        {/* </div> */}
        <div className="radio">
          <p>Filter by:</p>
          <form>
            <label>
              <input id="front" type="radio" value='Frontend' name="technologie"
              onClick={this.handleChangeInput} />
              Frontend
            </label>
            <label>
              <br/>
              <input id="back" type="radio" value='Backend' name="technologie"
              onClick={this.handleChangeInput} />
              Backend
            </label>
          </form>
        </div>
        </div>
      //</div> 
    );
  }
}

export default Controls;