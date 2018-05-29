import React, { Component } from 'react';
import './css/Controls.css';
import Content from './Content';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    type: 'dark', 

  },
})



class Controls extends Component {
  constructor() {
    super(); 

    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  state = {
    value: '',
    color: 'primary'
  };
  handleChangeInput(e) {
    this.props.controlFilter(e);
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.controlFilter(event);
  };

  render() {
    return (
      <div className="controls" > {/*</div> style={{backgroundColor:"white"}}>*/}
        <MuiThemeProvider theme={theme}>
          <TextField
            className="editSearch"
            placeholder="Search in Cards"
            onChange={this.handleChangeInput}/>
        <div className="radio">
          <p>Filter by:</p>
          {/* <FormLabel component="legend">Filter by</FormLabel> */}
          
          <RadioGroup
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel id="front" value='Frontend' name="technologie" control={<Radio color="white" />} label="Frontend" />
            <FormControlLabel id="back" value='Backend' name="technologie" control={<Radio  color="white" />} label="Backend" />

          </RadioGroup>
          


      </div>
      </MuiThemeProvider>
        </div>
    );
  }
}

export default Controls;