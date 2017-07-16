import React from 'react';
import Head from 'react-helmet';

import './Home.css';
import 'typograf/dist/typograf.css';

import Intro from '../../content/intro/Intro';
import Cases from '../../content/cases/Cases';

export const Home = () => (
    <main>
        <Intro/>
        <Cases/>
    </main>
);
