import React, { Component } from 'react';
import './css/PostDetails.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Doughnut} from 'react-chartjs-2';

const data = {
	labels: [
		'Pink',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class PostDetails extends Component {
  constructor(){
    super();


    this.handleClickDetails = this.handleClickDetails.bind(this);
  }
  static propTypes ={
      id: PropTypes.number.isRequired, 
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      technology: PropTypes.array.isRequired, 
      imageUrl: PropTypes.string
  };

  handleClickDetails(e) {
    this.props.onClick(e);
  }

  render() {
    const { id, title, details, technology, imageUrl} = this.props;

    
    return (
      <div className="PostDetails">

        <Button
        className="Button"
        id="goback"
        variant="raised"      
        onClick= {this.handleClickDetails}
        >
        Go back
        </Button>

        <img id="imagePost" src={imageUrl} alt={title}/>
        <div className="Title">
          <p>{`${details}`}</p>
        </div>
        <h2>Javascript Development</h2>
        <Doughnut  data={data} />

      </div>
      
    );
  }
}

export default PostDetails;