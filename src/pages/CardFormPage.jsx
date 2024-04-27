
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard, getVendorLogo, getVendorColor} from "../reducers/cardReducers";
import { useNavigate } from "react-router-dom";
import "./CardFormPage.css";

function CardFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardState = useSelector(state => state.card);



  const [formInput, setFormInput] = useState({
    cardNumber: "",
    name: "",
    date: "",
    cvv: "",
    vendor: "",
    backgroundColor: "rgb(206, 205, 204)", 
    selectedLogo: "chip-dark.svg" 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
     const backgroundColor = getVendorColor(value);
    const selectedLogo = getVendorLogo(value);
    setFormInput({ ...formInput, [name]: value, backgroundColor, selectedLogo });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    dispatch(addCard({ ...formInput }));
    console.log("Redux State after adding card:", cardState);
    navigate("/");
  };



  return (
    <section className="form-page">
      <h1>ADD A NEW BANK CARD</h1>
      
     
      <article className="card" style={{ backgroundColor: formInput.backgroundColor }}>
        <div className="card-header">
          
          <img
            src={`src/assets/image/${formInput.selectedLogo}`}
            alt="Logo"
            className="vendor-logo"
          />
        </div>
        <div className="card-body">
          <p>{formInput.cardNumber}</p>
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
          placeholder="Enter Card Number"
        />
        
        <label htmlFor="name">Name:</label>
        <input
          className="input"
          type="text"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          placeholder="Enter Name"
        />
       
        <label htmlFor="date">Expiration Date:</label>
        <input
          className="input"
          type="text"
          name="date"
          value={formInput.date}
          onChange={handleChange}
          placeholder="Enter Expiration Date"
        />
       
        <label htmlFor="cvv">CVV:</label>
        <input
          className="input"
          type="text"
          name="cvv"
          value={formInput.cvv}
          onChange={handleChange}
          placeholder="Enter CVV"
        />
       
        <label htmlFor="vendor">Vendor:</label>
        <select onChange={handleChange} name="vendor" value={formInput.vendor}>
          <option value="Bitcoin Inc">Select Vendor</option>
          <option value="Bitcoin Inc">Bitcoin Inc</option>
          <option value="Ninja Bank">Ninja Bank</option>
          <option value="Blockchain Inc">Blockchain Inc</option>
          <option value="Evil Corp">Evil Corp</option>
        </select>

        
        <button type="submit" className="btn-new btn-addcard">
          Add Card
        </button>
      </form>
    </section>
  );
}

export default CardFormPage;
