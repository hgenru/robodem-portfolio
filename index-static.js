import fs from 'fs';
import ejs from 'ejs';

import React from 'react';
import ReactDom from 'react-dom/server';
import Helmet from 'react-helmet';

import createApp from './index';

const indexTemplateText = fs.readFileSync('index.ejs').toString();
const indexTemplate = ejs.compile(indexTemplateText);

const urls = ['/'];

function renderer(url) {
    return new Promise((resolve, reject) => {
        const app = createApp();
        const appContent = ReactDom.renderToString(app);
        const helmet = Helmet.rewind();
        const html = indexTemplate({app: appContent, helmet});
        resolve(html);
    });
}

export default {urls, renderer};
