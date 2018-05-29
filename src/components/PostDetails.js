import React, { Component } from 'react';
import './css/PostDetails.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {Doughnut} from 'react-chartjs-2';
import { Container, Row, Col } from 'react-grid-system';


const data = {
	labels: [
		'Pink',
		'Blue',
		'Yellow'
  ],

	datasets: [{
		data: [],
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
    postDescription: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired, 
    imageUrl: PropTypes.string,
    cardGraph: PropTypes.array
};

 

  handleClickDetails(e) {
    this.props.onClick(e);
  }

  render() {
    const { id, title, postDescription, postTitle, imageUrl, cardGraph} = this.props;
    {data.datasets[0].data = cardGraph}

    
    return (
      <div className="PostDetails">
        {this.setDataChart}
        <div id="header" style={{backgroundImage: `url(${imageUrl})` }}>
        <Button
        className="Button"
        id="goback"
        variant="raised"
        color="primary"
        onClick= {this.handleClickDetails}
        >
        Go Back
        </Button>
        </div>
            
           <Container>
          <Row>
            <Col sm={6}>
              <div className="Title">
                <p>{`${postDescription}`}</p>
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