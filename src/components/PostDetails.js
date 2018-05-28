import React, { Component } from 'react';
import './css/PostDetails.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Doughnut} from 'react-chartjs-2';
//import { Container, Row, Col } from 'reactstrap';
import { Container, Row, Col } from 'react-grid-system';


const data = {
	labels: [
		'Pink',
		'Blue',
		'Yellow'
  ],

	datasets: [{
    //Data values are static for now!
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
        onClick= {this.handleClickDetails}
        >
        Go back
        </Button>
          
           <img id="imagePost" src={imageUrl} alt={title}/>
            
           <Container>
          <Row>
            <Col sm={6}>
              <div className="Title">
                <p>{`${details}`}</p>
              </div>
            </Col>

            <Col sm={6}>
              <div className="graph">
                <p className="detail">{`${title}`} Development</p>
                <Doughnut  data={data} />
              </div>
            </Col>

          </Row>

        </Container>
      </div>
      
    );
  }
}

export default PostDetails;