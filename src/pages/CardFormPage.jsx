import React, { useState } from "react";
import "./CardFormPage.css";
import { useDispatch, useSelector } from "react-redux";
import { addCard, getVendorAndColor } from "../reducers/cardReducers";
import { useNavigate } from "react-router-dom";

function CardFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cardState = useSelector(state => state.card);
  

  const [formInput, setFormInput] = useState({
    cardNumber: "",
    name: "",
    date: "",
    cvv: "",
    vendor: "",
    color: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const color = getVendorAndColor(formInput.vendor);
    dispatch(addCard({ ...formInput, color }));

    navigate("/");
  };

  return (
    <section className="form-page">
      <h1>ADD A NEW BANK CARD</h1>
      <article className="card" style={{ backgroundColor: formInput.color }}>
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
          <p>XXX XXX XXX XXX: {formInput.cardNumber}</p>
          <p>FIRSTNAME LASTNAME: {formInput.name}</p>
          <p>Valid: {formInput.date}</p>
          <p>cvv: {formInput.cvv}</p>
        </div>
      </article>

      <form onSubmit={handleAddSubmit}>
        <label htmlFor="cardNumber">Card Number:</label>
        <input
          className="input"
          type="text"
          name="cardNumber"
          value={formInput.cardNumber}
          onChange={handleChange}
          placeholder="card number"
        />

        <label htmlFor="name">Name:</label>
        <input
          className="input"
          type="text"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          placeholder="name"
        />

        <label htmlFor="date">Date:</label>
        <input
          className="input"
          type="text"
          name="date"
          value={formInput.date}
          onChange={handleChange}
          placeholder="date"
        />

        <label htmlFor="cvv">CVV:</label>
        <input
          className="input"
          type="text"
          name="cvv"
          value={formInput.cvv}
          onChange={handleChange}
          placeholder="cvv"
        />

        <label htmlFor="vendor">Select Vendor:</label>
        <select onChange={handleChange} name="vendor" value={formInput.vendor}>
          <option value="KALASCARD">KALASCARD</option>
          <option value="VASACARD">VASACARD</option>
          <option value="MINISTERCARD">MINISTERCARD</option>
          <option value="HAWAIICARD">HAWAIICARD</option>
          <option value="MADAGASKARCARD">MADAGASKARCARD</option>
        </select>

        <button type="submit" className="btn-new btn-addcard">
          Add Card
        </button>
      </form>
    </section>
  );
}

export default CardFormPage;
