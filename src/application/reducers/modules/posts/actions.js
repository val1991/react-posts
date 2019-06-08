import {
    GET_ALL_POSTS,
    GET_ALL_POSTS_ERROR,
    GET_DETAILS_POST,
    GET_DETAILS_POST_ERROR,
    ADD_COMMENT,
} from './types';

import { Posts } from './api';

export const getAllPostsAction = () => async (dispatch) => {
    const response = await Posts.getAllPosts();
    if(response.status === 200) {
        dispatch({
            type: GET_ALL_POSTS,
            payload: response.data,
        });
    } else {
        dispatch({
            type: GET_ALL_POSTS_ERROR,
            payload: [],
        });
    }
}

export const getPostByIdAction = (postId) => async (dispatch) => {
    const response = await Posts.getPostById(postId);
    if(response.status === 200) {
        dispatch({
            type: GET_DETAILS_POST,
            payload: response.data,
        });
    } else {
        dispatch({
            type: GET_DETAILS_POST_ERROR,
            payload: {},
        });
    }

    return response;
}

export const addCommentAction = (postId, body) => async (dispatch, getState) => {
    const response = await Posts.addComment(postId, body);
    if(response.status === 201) {
        const { posts: { postDetails } } = getState();
        let newPostDetails = { ...postDetails };
        newPostDetails.comments.push(response.data);
        dispatch({
            type: ADD_COMMENT,
            payload: newPostDetails,
        });
    }

    return response;
}