import {
  FETCH_CONSUMER,
  FETCT_NEW_CONSUMER,
  FETCH_DELETE_CONSUMER,
  FETCH_UPDATE_CONSUMER,
  FETCH_CONSUMER_ID
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  itemkill: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONSUMER:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_CONSUMER_ID:
      return {
        ...state,
        item: action.payload
      }
    case FETCT_NEW_CONSUMER:
      return {
        ...state,
        item: action.payload
      };
    case FETCH_DELETE_CONSUMER: 
      return {
        ...state,
        itemkill: action.payload
      };
    case FETCH_UPDATE_CONSUMER:
      return {
        ...state,
        item: action.payload
      };
    default:
      return state;
  }
}