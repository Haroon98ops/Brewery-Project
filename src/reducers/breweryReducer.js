let initialState = {
  name: [],
  brewData: [],
  selectedBrew: {},
};

const breweryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        name: action.payload,
      };
    case "STORE_DATA_AFTER_SERACH":
      return {
        ...state,
        brewData: action.payload,
      };
    case "FIND_CURRENT_BREW":
      return {
        ...state,
        selectedBrew: state.brewData.find((item) => item.id === action.payload),
      };

    default:
      return state;
  }
};

export default breweryReducer;
