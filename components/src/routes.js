import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import test from './test.js';
import App from './app.js';

export default (
    <Route path='/' handler={App}>
        <DefaultRoute handler={test} />
    </Route>
);