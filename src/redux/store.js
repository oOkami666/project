import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnchacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [ReduxThunk];

const store = createStore(rootReducer, composeEnchacers(
    applyMiddleware(...middleware)
));

export default store;