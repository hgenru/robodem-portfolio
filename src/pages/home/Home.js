import React from "react";
import Head from "react-helmet"
import FontFaceObserver from 'fontfaceobserver'

import './Home.css';

import Intro from '../../content/intro/Intro.js';
import Cases from '../../content/cases/Cases.js'

const FONT_URL = 'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700&amp;subset=cyrillic';

const font = new FontFaceObserver('Roboto');

const root = document.documentElement;
root.classList.add('fonts-hide');
font.load(null, 5000).then(() => {
    root.classList.add('fonts-loaded');
    root.classList.remove('fonts-hide');
}, () => {
    root.classList.remove('fonts-hide');
});

export const Home = () => (
    <div>
        <Head>
            <link href={FONT_URL} rel="stylesheet"/>
        </Head>

        <main className="content">
            <Intro/>
            <Cases/>
        </main>
    </div>
);
