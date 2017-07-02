import React from 'react';
import Head from 'react-helmet';

import './Home.css';
import 'typograf/dist/typograf.css';

import Intro from '../../content/intro/Intro.js';
import Cases from '../../content/cases/Cases.js'

export const Home = () => (
    <main>
        <Intro/>
        <Cases/>
    </main>
);
