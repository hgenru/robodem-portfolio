import fs from 'fs';
import ejs from 'ejs';

import React from 'react';
import ReactDom from 'react-dom/server';
import {RouterContext, match} from 'react-router';
import Helmet from 'react-helmet';

import createApp, {routes} from './index';

const indexTemplateText = fs.readFileSync('index.ejs').toString();
const indexTemplate = ejs.compile(indexTemplateText);

const urls = ['/'];

function renderer(url) {
    return new Promise((resolve, reject) => {
        match({routes, location: url}, (err, redirect, props) => {
            const appContent = ReactDom.renderToString(<RouterContext {...props}/>);
            const helmet = Helmet.rewind();
            const html = indexTemplate({app: appContent, helmet});
            resolve(html);
        });
    });
}

export default {urls, renderer};
