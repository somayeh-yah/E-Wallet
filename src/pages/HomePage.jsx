import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCard} from "../reducers/cardReducers";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  
  function handleDeleteButton(cardNumber){
    dispatch(deleteCard(cardNumber));
  }
 

  const cardsComponent = cards.map((card, id) => {
    return (
      <Card
        key={id}
        card={card}
        color={card.color}
        onDelete={() => handleDelete(card.cardNumber)}
        
      />
    );
  });

  return (
    <main className="home-page" style={{ backgroundColor: "#dad7cd" }}>
      <h1>E-WALLET</h1>
      {cardsComponent}
      <div className="homepage-buttons">
        <button className="btn">
          <Link
            to="/addCard"
            style={{ color: "white", fontSize: "20px", textDecoration: "none" }}
          >
            Add A NEW CARD
          </Link>
        </button>

        <button onClick={() => handleDeleteButton(cards[0]?.cardNumber)} className="btn">Delete</button>
      </div>
    </main>
  );
}

export default HomePage;