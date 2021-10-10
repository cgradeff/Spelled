import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_USER:
      nextState[action.user.id] = action.user;
      // return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      return nextState;
    default:
      return oldState;
  }
}

export default usersReducer;