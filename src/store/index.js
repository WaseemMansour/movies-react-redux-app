import { createStore } from 'redux';
import reducer from './reducers';
import { middleware, middlewareWithLogger } from './middleware'

const store = createStore(reducer, process.env.NODE_ENV === 'development' ? middlewareWithLogger : middleware );
export default store;