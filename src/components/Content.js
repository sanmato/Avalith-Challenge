import React, { Component } from 'react';
import './css/Content.css';
import PropTypes from 'prop-types';

import jsonReceived from './data/cards.json'
import CardsContainer from './CardsContainer';
import PostDetails from './PostDetails';
import Card from './Card';


class Content extends Component {
  static propTypes = {
    filtro: PropTypes.string,
  };

  constructor () {
    super();

    this.state = {
      mode: "Dashboard",
      cardSelected: 0
    };

    this.CardSelect = this.CardSelect.bind(this);
  }

  componentDidMount() {
  }

  FilterArray () {
    var tmpArray = new Array;
    if (this.props.filtro !== '') {
      for (var i = 0; i < jsonReceived.length; i++ ) {
        if (jsonReceived[i].cardTitle === this.props.filtro) {
          tmpArray.push(jsonReceived[i]);
          console.log(jsonReceived[i]);
        }
      }
    } else {
      tmpArray = jsonReceived;
    }
    return tmpArray;
  }

  CardSelect(e){
    alert("tarjeta seleccionada: " + e.target.id);
    this.setState({
      mode: "PostDetails",
      cardSelected: e.target.id
    });
  }

  render() {
    const {filtro, cardSelected} = this.props;
    if ( this.state.mode === "Dashboard" ) {
      var arrayCards = this.FilterArray();

      return (
        <div className="Content">
          <CardsContainer cards={arrayCards} onClick={this.CardSelect}/>

        </div> 
      );
    }else {
      return (
        <div className="Content">

          <PostDetails id= {jsonReceived[this.state.cardSelected -1].cardId}
          title= {jsonReceived[this.state.cardSelected -1].cardTitle} 
          details={jsonReceived[this.state.cardSelected -1].cardDescription}
          technology={jsonReceived[this.state.cardSelected -1].cardTechnology}
          imageUrl={jsonReceived[this.state.cardSelected -1].cardImageUrl}/>
        </div>
      )
    }
  }
}

export default Content;