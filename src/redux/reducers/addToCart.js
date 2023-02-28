import { createReducer } from "@reduxjs/toolkit";

import { ADD_TO_CART } from "../actions/actionTypes";

const initialState = { addcart: undefined };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_TO_CART, (state, action) => {
    // console.log(action.payload);
    Object.assign(state, {
      addcart: action.payload,
    });
  });
});
export default reducer;
