import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes.js';
import Router from 'react-router';

Router.run(routes, Router.HistoryLocation, function ran (Handler, state) {
    ReactDOM.render(<Handler />, document.getElementById('app-container'));
})