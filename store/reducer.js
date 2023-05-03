const reducer = (state, action) => {
  switch (action.type) {
    case "area":
      return {
        ...state,
        area: action.payload,
      };
    case "size":
      return {
        ...state,
        size: action.payload,
      };
    case "customer":
      return {
        ...state,
        customer: action.payload,
      };
    case "datetime":
      return {
        ...state,
        datetime: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
