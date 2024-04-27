
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCard, setActiveCard, getVendorLogo } from "../reducers/cardReducers";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.card.cards);
  const activeCard = useSelector((state) => state.card.activeCard);

  function handleCardClick(card) {
    dispatch(setActiveCard(card));
    console.log("Active card selected:", card);
  }

  return (
    <main className="home-page" style={{ backgroundColor: "#dad7cd" }}>
      <h1>E-WALLET</h1>
      <section className="active-card-section">
        {activeCard && (
          <Card
          
           
            card={activeCard}
            backgroundColor={activeCard.backgroundColor}
            venderLogo = {activeCard.getVendorLogo}
            onDelete ={deleteCard.cardNumberToDelete}
            onClick={() => dispatch(setActiveCard(null))}
          />

         
        )}
       
      </section>
      <section className="cards-section">
  
        {cards
          .filter((card) => card !== activeCard)
          .map((card, id) => (
            <Card
              key={id}
              card={card}
              backgroundColor={card.backgroundColor}
              onClick={() => handleCardClick(card)}
            />
          ))}
      </section>
      <div className="homepage-buttons">
        <button className="btn">
          <Link
            to="/addCard"
            style={{ color: "white", fontSize: "20px", textDecoration: "none" }}
          >
            Add A NEW CARD
          </Link>
        </button>
      </div>
    </main>
  );
}

export default HomePage;







