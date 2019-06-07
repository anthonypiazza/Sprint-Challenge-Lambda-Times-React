import React from 'react';
import PropTypes from 'prop-types';

//1. added headline by referencing the headline key:value in the props object passed down as card
//2. added author by referencing the author key:value in the props object passed down as card
//3. added img by referencing the img key:value in the props object passed down as card
//4. added and imported proptypes

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt={props.card.author}/>
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  tab: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string,
}

export default Card;
