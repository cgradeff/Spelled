import {
  RECEIVE_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING,
} from '../actions/listing_actions';


const EventsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_LISTINGS: 
      return action.listings; 
    case RECEIVE_LISTING:
      nextState[action.listing.id] = action.listing;
      return nextState;
    case REMOVE_LISTING:
      delete nextState[action.listingId];
      return nextState;
    default:
      return oldState;
  }
}

export default EventsReducer;