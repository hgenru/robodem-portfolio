import React from 'react';
import Head from 'react-helmet';

import './Home.css';

import Intro from '../../content/intro/Intro.js';
import Cases from '../../content/cases/Cases.js'

export const Home = () => (
    <main className="content">
        <Intro/>
        <Cases/>
    </main>
);
