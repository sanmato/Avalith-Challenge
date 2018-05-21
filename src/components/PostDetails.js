import React, { Component } from 'react';
import './css/PostDetails.css';
// import Card from './Card';
import PropTypes from 'prop-types';


class PostDetails extends Component {
  constructor(){
    super();


  }
  static propTypes ={
      id: PropTypes.string.isRequired, 
      title: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      technology: PropTypes.array.isRequired, 
      imageUrl: PropTypes.string
  };


  render() {
    const { id, title, details, technology, imageUrl} = this.props;

    return (
      <div className="PostDetails">
        <img id={id} src={imageUrl} alt={title} onClick={this.handleShowCard} />
        <div className="Title">
          <p>{`${details}`}</p>
        </div>
      </div> 
    );
  }
}

export default PostDetails;