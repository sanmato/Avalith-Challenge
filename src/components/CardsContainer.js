import React, { Component } from 'react';
import './css/CardsContainer.css';
import Card from './Card';
import PropTypes from 'prop-types';


class CardsContainer extends Component {
  constructor() {
    super();
    this.ShowCard = this.ShowCard.bind(this);
  }

  static propTypes ={cards: PropTypes.array.isRequired};

  ShowCard(e){
    this.props.onClick(e);
  }
  render() {
    const {cards} = this.props;
    
    return (
      <div className="CardsContainer">
        <header className="Title">LANGUAGES & TECHNOLOGIES</header>
        

          {cards && cards.map( (item, key) => (
          <Card 
            key= {key}
            id= {item.cardId}
            title= {item.cardTitle} 
            details={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}
            onClick={this.ShowCard}/>
          )
        )}
      </div>
    );
  }
}

export default CardsContainer;