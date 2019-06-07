import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

/* Using cards prop, map over list creating a new Card for each passing card as the only prop*/
//1.mapped over cards prop and created new Card component for each iteration
//2. added index as arg for unique key
//3. passed down card as {card}
//4. added and imported proptypes

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => (
        <Card card={card} key={index}/>
      ))}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
}

export default Cards;