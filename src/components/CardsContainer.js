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
    // var myCards = new Map(cards);
    // var filterCards = new Array;
    return (
      <div className={`CardsContainer ${ true ? 'active' : '' }`}>
        <header className="Title">LANGUAGES & TECHNOLOGIES</header>
        {/* {filterCards = myCards.filter( (item, key) => 
          item.cardTechnology == "Frontend").map( (item, key) => (
          <Card 
            key= {key}
            title= {item.cardTitle} 
            details={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}/>
            // }
          )
          )        
        } */}

          {cards && cards.map( (item, key) => (
            // if (item.cardTechnology !== 'Frontend'){
          <Card 
            key= {key}
            id= {item.cardId}
            title= {item.cardTitle} 
            details={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}
            onCardClick={this.ShowCard}/>
            // }
          )
        )}
      </div>
    );
  }
}

export default CardsContainer;