import React from 'react';

import { NavLink } from 'react-router-dom';

import {
    HOME_PATH,
} from '../../application/routes';

const PostComponent = ({
    title,
    body,
    viewPostId,
}) => {
    return (
        <div>
            <h3>{title}</h3>
            <span>{body}</span>
            <div>
                <NavLink to={`${HOME_PATH}${viewPostId}`}>
                    View details
                </NavLink>
            </div>
        </div>
    )
}

export default PostComponent;