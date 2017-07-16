import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './src/pages/home/Home.js';

export default function createApp() {
    return (<Home/>);
}

if (global.window) {
    const app = createApp();
    ReactDOM.render(app, document.getElementById('app'));
}
