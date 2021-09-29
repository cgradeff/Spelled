import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import listingsReducer from './listings_reducer';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  listings: listingsReducer,
  comments: commentsReducer
})

export default entitiesReducer;