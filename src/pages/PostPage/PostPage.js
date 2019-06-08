import React, { useEffect, useState } from 'react';

import { isEmpty } from 'lodash';

import PostComponent from '../../components/PostComponent';
import CommentsComponent from '../../components/CommentsComponent';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import { getPostByIdAction, addCommentAction } from '../../application/reducers/modules/posts/actions';

const PostPage = (props) => {
    const [isLoading, setIsloading] = useState(true);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        const { id } = props.match.params;
        const { getPostByIdAction } = props;
        const response = await getPostByIdAction(id);
        if(response.status === 200) {
            setIsloading(false);
        }
    }

    const handleAddComment = async () => {
        const { addCommentAction } = props;
        const response = await addCommentAction(postDetails.id, inputValue);
        if(response.status === 201) {
            setInputValue('');
        }
    }


    const { postDetails } = props;
    if(isLoading) {
        return <div>loading ...</div>
    }
    if(isEmpty(postDetails)) {
        return  <div>Something went wrong</div>
    }
    return (
        <div>
            <PostComponent
                key={postDetails.id}
                title={postDetails.title}
                body={postDetails.body}
                viewPostId={postDetails.id}
            />
            <div>
                <h4>Add comment</h4>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAddComment}>Add comment</button>
            </div>
            <h3>Comments</h3>
            {isEmpty(postDetails.comments)
                ?
                <div>No commets yet</div>
                :
                postDetails.comments.map(comment => {
                    return (
                        <CommentsComponent
                            key={comment.id}
                            body={comment.body}
                        />
                    )
                })
            }
            
        </div>
    )
}

function mapStateProps(state) {
    return {
        postDetails: state.posts.postDetails,
    };
  }

  export default compose(
    connect(mapStateProps, { getPostByIdAction, addCommentAction }),
        withRouter
  )(PostPage);
