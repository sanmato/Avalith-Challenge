import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Card.css';


class Card extends Component {
  constructor(){
    super();


    this.handleShowCard = this.handleShowCard.bind(this);
  }
  static propTypes ={
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      technology: PropTypes.array.isRequired, 
      imageUrl: PropTypes.string
  };

  handleShowCard(e){
    this.props.onCardClick(e);
  }

  render() {
    const { id, title, details, technology, imageUrl } = this.props;
    return (
      <div className="card">
        <img id={id} src={imageUrl} alt={title} onClick={this.handleShowCard} />
        <div className="text">
          <p>{`${details}`}</p>
        </div>
      </div> 
    );
  }
}

export default Card;