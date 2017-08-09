import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts';
import comments from './comments';

//three things that live in state - posts, comments, and changes

export const rootReducer = combineReducers({ posts, comments, router: routerReducer })
