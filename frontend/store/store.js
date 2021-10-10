import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = (preloadedState = {}) => {
    const middleware = applyMiddleware(thunk);
    const store = createStore(rootReducer, preloadedState, composeWithDevTools(middleware))
    return store;
}

export default configureStore;