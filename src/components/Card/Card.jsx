import React from "react";
import "./Card.css";

function Card(props) {
  const { card, color} = props;

  const handleDelete = () => {
    dispatch(deleteCard(card.cardNumber)); 
  };  
  return (
    <article className="card" style={{ backgroundColor: color }}>
      <div className="card-header">
        <img
          src="src/assets/image/chip-dark.svg"
          alt="Chip Logo"
          className="chip-logo"
        />
        <img
          src="src/assets/image/vendor-bitcoin.svg"
          alt="Bitcoin Logo"
          className="bitcoin-logo"
        />
      </div>
      <div className="card-body">
        <p>XXX XXX XXX XXX: {card.cardNumber}</p>
        <p>FIRSTNAME LASTNAME: {card.name}</p>
        <p>Valid: {card.date}</p>
        <p>cvv: {card.cvv}</p>
        <button onClick={handleDelete}>Delete Card</button>
      </div>
    </article>
  );
}

export default Card;
