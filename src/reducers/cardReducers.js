import { createSlice } from "@reduxjs/toolkit";

export const getVendorAndColor = (vendor) => {
  switch (vendor) {
    case "KALASCARD":
      return "#9f86c0";
    case "VASACARD":
      return "#ffd6ff";
    case "MINISTERCARD":
      return "#1e6091";
    case "HAWAIICARD":
      return "#f4acb7";
    case "MADAGASKARCARD":
      return "#f15bb5";
    default:
      return "rgba(255, 174, 52, 1)";
  }
};

const initialState = {
  cards: [],
  selectedVendor: "",
  color: {
    code: "#d90368",
  },
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard(state, action) {
      state.cards.push(action.payload);
    },

    changeColor(state, action) {
      state.color.code = getVendorColor(action.payload);
      state.cards.forEach((card) => {
        card.backgroundColor = state.color.code;
      });
    },

    deleteCard(state, action) {
      const cardNumberToDelete = action.payload;
      state.cards = state.cards.filter(
        (card) => card.cardNumber !== cardNumberToDelete
      );
    },
  },
});

export const { addCard, deleteCard, changeColor } = cardSlice.actions;
export default cardSlice.reducer;
