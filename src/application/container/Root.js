import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { getAllPostsAction } from '../../application/reducers/modules/posts/actions';

import PostListPage from '../../pages/PostListPage';
import PostPage from '../../pages/PostPage';

import {
    HOME_PATH,
} from '../routes';

const Root = (props) => {
    useEffect(() => {
        const { getAllPostsAction } = props;
        getAllPostsAction();
    }, [props])

    return (
        <Switch>
            <Route
                path={`${HOME_PATH}:id`}
                component={PostPage}
            />
            <Route
                exact
                path={HOME_PATH}
                component={PostListPage}
            />
        </Switch>
    )
}

export default connect(
    null,
    { getAllPostsAction },
  )(Root);
