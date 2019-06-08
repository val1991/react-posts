import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import postsReducer from './modules/posts';

export default (history) => combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
});
