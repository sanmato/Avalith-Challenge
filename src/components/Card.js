import React, { Component } from 'react';
import './css/Card.css';
import PropTypes from 'prop-types';


class Card extends Component {
    static propTypes ={
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        technology: PropTypes.array.isRequired, 
        imageUrl: PropTypes.string
    };
  
    render() {
      const { title, description, technology, imageUrl } = this.props;
      return (
        <div className="card">
          <div className="image">
            <img width={325} src={imageUrl} alt="technologyLogo" />
          </div>
          <div className="text">
            <p>{`${title}: ${description}`}</p>
        </div>
      </div> 
    );
  }
}

export default Card;