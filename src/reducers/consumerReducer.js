import {
  FETCH_CONSUMER,
  FETCT_NEW_CONSUMER,
  FETCH_DELETE_CONSUMER,
  FETCH_UPDATE_CONSUMER,
  FETCH_CONSUMER_ID,
  FETCH_COUNT,
  FETCH_SEARCH
} from "../actions/types";

const initialState = {
  items: [],
  item: {},
  itemkill: {},
  count: []
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
    case FETCH_SEARCH:
      return {
        ...state,
        items: action.payload
      }
    case FETCH_COUNT:
      let count = action.payload.count/10;
      if( (count % 1) !== 0 ){
        count = count + 1
      }

      let page = [];
      for(let i = 1; i < count.toFixed(2); i++){
        page.push(i);
      }

      return {
        ...state,
        count: page
      }
    default:
      return state;
  }
}