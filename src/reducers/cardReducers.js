
import { createSlice } from "@reduxjs/toolkit";

export const getVendorLogo = (vendor) => {
  switch (vendor) {
    case "Bitcoin Inc":
      return "vendor-bitcoin.svg" ;
    case "Ninja Bank":
      return "vendor-ninja.svg";
    case "Blockchain Inc":
      return "vendor-blockchain.svg";
    case "Evil Corp":
      return "vendor-evil.svg";
    default:
      return "chip-dark.svg"; 
  }
};


export const getVendorColor = (vendor) => {
  switch (vendor) {
    case "Bitcoin Inc":
      return "#FFAE34";
    case "Ninja Bank":
      return "#222222";
    case "Blockchain Inc":
      return "#8B58F9";
    case "Evil Corp":
      return "#F33355";
    default:
      return "lightgrey"; 
  }
};

const initialState = {
  cards: [],
  activeCard: null,
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },
    deleteCard(state, action) {
      console.log(state , "this is my state");
      console.log(action, "this is my action");
      const cardNumberToDelete = action.payload;
      state.cards = state.cards.filter(
        (card) => card.id !== cardNumberToDelete
      );
    },
    setActiveCard(state, action) {
      state.activeCard = action.payload;
    },
  },
});

export const { addCard, deleteCard, setActiveCard} = cardSlice.actions;
export default cardSlice.reducer;
