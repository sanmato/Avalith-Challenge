import React, { Component } from 'react';
import './css/Content.css';
import Card from './Card';
import jsonReceived from './data/cards.json'

class Content extends Component {
  render() {
    return (
      <div className="Content">
        
        <header className="Title">LANGUAGES & TECHNOLOGIES</header>
        
        {jsonReceived && jsonReceived.map( (item, key) => 
          <Card 
            key= {key}
            title= {item.cardTitle} 
            description={item.cardDescription}
            technology={item.cardTechnology}
            imageUrl={item.cardImageUrl}
          />)}
        
      </div> 
    );
  }
}

export default Content;