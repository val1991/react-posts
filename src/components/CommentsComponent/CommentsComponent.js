import React from 'react';

const CommentsComponent = ({
    author,
    body,
    date,
}) => {
    return (
        <div>
            <span>Comment - {body}</span>
        </div>
    )
}

export default CommentsComponent;