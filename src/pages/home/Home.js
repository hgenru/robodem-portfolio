import React from "react";
import Head from "react-helmet"
import FontFaceObserver from 'fontfaceobserver'

import './Home.css';

import Intro from '../../content/intro/Intro.js';
import Cases from '../../content/cases/Cases.js'

const FONT_URL = 'https://fonts.googleapis.com/css?family=Roboto:300,400,400i,700&amp;subset=cyrillic';

const font = new FontFaceObserver('Roboto');

if (global.document) {
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
}

export const Home = () => (
    <div>
        <Head>
            <link href={FONT_URL} rel="stylesheet"/>
            <link href="./styles.css" rel="stylesheet"/>
        </Head>

        <main className="content">
            <Intro/>
            <Cases/>
        </main>
    </div>
);
