import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import app from '../reducers'
import thunk from 'redux-thunk';

export default store = createStore(app, composeWithDevTools(
    applyMiddleware(thunk),
));