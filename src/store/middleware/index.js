import thunk from 'redux-thunk';
import logger from './logger';
import { applyMiddleware } from 'redux';

export const middleware = applyMiddleware(thunk);
export const middlewareWithLogger = applyMiddleware(thunk, logger);
