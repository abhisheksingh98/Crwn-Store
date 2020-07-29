import ShopActionTypes from "./shop.types";

const INITIAL_DATA = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (currentState = INITIAL_DATA, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...currentState,
        isFetching: true
      };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...currentState,
        isFetching: false,
        collections: action.payload
      };
    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...currentState,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return currentState;
  }
};

export default shopReducer;
