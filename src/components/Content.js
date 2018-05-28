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
    visibleBar: PropTypes.bool
  };

  constructor () {
    super();

    this.state = {
      mode: "Dashboard",
      cardSelected: 0
    };

    this.CardSelect = this.CardSelect.bind(this);
    this.OpenDashboard = this.OpenDashboard.bind(this);
  }

  FilterArray () {
    
    let aux = new Array;
    if (this.props.filtro === "Backend" || this.props.filtro === "Frontend") {
        jsonReceived.forEach((element) =>{

          if(element.cardTechnology.find((e) => e == this.props.filtro)){
    
            aux.push(element)
          }
        })
    } else {    
       aux = jsonReceived.filter((e) => 
      e.cardTitle.toLowerCase().indexOf(this.props.filtro.toLowerCase()) >= 0);
    }
   
    return aux;
  }

  CardSelect(e){
    if (e.target.id > 0) {
      this.setState({
        mode: "PostDetails",
        cardSelected: e.target.id
      });
    }
  }

  OpenDashboard(e){
      this.setState({
        mode: "Dashboard"
      });

  }

  render() {
    const {filtro, visibleBar} = this.props;

    if ( this.state.mode === "Dashboard" ) {
      var arrayCards = this.FilterArray();

      const bar = visibleBar ? (        
        <div className="Content active">
          <CardsContainer cards={arrayCards} onClick={this.CardSelect}/> </div> 
      ) : 
        <div className="Content inactive">
          <CardsContainer cards={arrayCards} onClick={this.CardSelect}/> </div> 

      return (  
        bar
      );
    }else {

      const bar = visibleBar ? (        
        <div className="Content active">
          <PostDetails id= {jsonReceived[this.state.cardSelected -1].cardId}
          title= {jsonReceived[this.state.cardSelected -1].cardTitle} 
          details={jsonReceived[this.state.cardSelected -1].cardDescription}
          technology={jsonReceived[this.state.cardSelected -1].cardTechnology}
          imageUrl={jsonReceived[this.state.cardSelected -1].cardImageUrl} 
          onClick={this.OpenDashboard}/>
        </div> 
      ) : 
        <div className="Content inactive">
          <PostDetails id= {jsonReceived[this.state.cardSelected -1].cardId}
          title= {jsonReceived[this.state.cardSelected -1].cardTitle} 
          details={jsonReceived[this.state.cardSelected -1].cardDescription}
          technology={jsonReceived[this.state.cardSelected -1].cardTechnology}
          imageUrl={jsonReceived[this.state.cardSelected -1].cardImageUrl} 
          onClick={this.CardSelect}/>
        </div> 

      return (
        bar

      )
    }
  }
}

export default Content;