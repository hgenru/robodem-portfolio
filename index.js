import React from 'react';
import ReactDOM from 'react-dom';
import {createHashHistory} from 'history';
import {Router, Route, useRouterHistory} from 'react-router';
import {Home} from './src/pages/home/Home.js';

export const routes = (
    <Route path="/" component={Home}/>
);

function createApp() {
    let basename = './';
    if (global.window) {
        basename = location.pathname;
    }
    const browserHistory = useRouterHistory(createHashHistory)({basename});
    return (
        <Router routes={routes} history={browserHistory}/>
    );
}

if (global.window) {
    const app = createApp();
    ReactDOM.render(app, document.getElementById('app'));
}
