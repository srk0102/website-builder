export const countReducer = function (
  state = {
    items: [],
    view: "list",
    cart: []
  },
  action
) {
  switch (action.type) {
    case "items":
      return { ...state, items: action.payload }
    case "view":
      return { ...state, view: action.payload }
    case "updateCart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      }
    case "cart":
      return {...state, cart: action.payload }
    default:
      return state;
  }
};