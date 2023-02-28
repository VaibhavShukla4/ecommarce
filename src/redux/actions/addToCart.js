import { ADD_TO_CART } from "./actionTypes";

export default (addToCart) => (dispatch) => dispatch(ADD_TO_CART(addToCart));
// this is currying
