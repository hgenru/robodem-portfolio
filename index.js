import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Home} from './src/pages/home/Home.js';

export const routes = (
    <Route path="/" component={Home}/>
);

function createApp() {
    return (
        <Router routes={routes} history={browserHistory}/>
    );
}

if (global.window) {
    const app = createApp();
    ReactDOM.render(app, document.getElementById('app'));
}
