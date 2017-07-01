import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory} from 'history';
import {Router, Route, useRouterHistory } from 'react-router';
import {Home} from './src/pages/home/Home.js';
import FontFaceObserver from 'fontfaceobserver'

export const routes = (
    <Route path="/" component={Home}/>
);

function createApp() {
    let basename;
    if (global.window) {
        const baseElement = document.querySelector('base');
        if (baseElement) {
            basename = baseElement.getAttribute('href');
        }
    }
    const browserHistory = useRouterHistory(createHistory)({basename});
    return (
        <Router routes={routes} history={browserHistory}/>
    );
}

if (global.window) {
    const font = new FontFaceObserver('Roboto');
    const FONTS_NOT_LOADED = 'fonts--not-loaded';
    const FONTS_LOADED = 'fonts--loaded'
    const root = document.documentElement;
    root.classList.add(FONTS_NOT_LOADED);
    font.load(null, 5000).then(() => {
        root.classList.remove(FONTS_NOT_LOADED);
        root.classList.add(FONTS_LOADED);
    }, () => {
        root.classList.remove(FONTS_NOT_LOADED);
    });

    const app = createApp();
    ReactDOM.render(app, document.getElementById('app'));
}
