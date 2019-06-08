import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_ERROR,
    GET_DETAILS_POST,
    GET_DETAILS_POST_ERROR,
    ADD_COMMENT,
} from './types';
  
  const initialState = {
      posts: [],
      postDetails: {},
    };
  
    export default (state = initialState, action) => {
      switch (action.type) {
          case GET_DETAILS_POST:
          case GET_DETAILS_POST_ERROR:
          case ADD_COMMENT:
            return {
              ...state,
              postDetails: action.payload,
            }
          case GET_ALL_POSTS_ERROR:
          case GET_ALL_POSTS:
            return {
              ...state,
              posts: action.payload,
            }
          default:
              return state;
      }
    };
