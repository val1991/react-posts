import React from 'react';

import { connect } from 'react-redux';

import PostComponent from '../../components/PostComponent';

const PostListPage = (props) => {
    const { posts } = props;
    return (
        <div>
            {posts.map(post => {
                return (
                    <PostComponent
                        key={post.id}
                        title={post.title}
                        body={post.body}
                        viewPostId={post.id}
                    />
                )
            })}
        </div>
    )
}

function mapStateProps(state) {
    return {
        posts: state.posts.posts,
    };
}


export default connect(
    mapStateProps,
    null,
)(PostListPage);
