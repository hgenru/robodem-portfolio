import React from 'react';
import {Helmet} from "react-helmet";

import './Home.css';
import 'typograf/dist/typograf.css';

import Intro from '../../content/intro/Intro';
import Cases from '../../content/cases/Cases';

export const Home = () => (
    <main>
        <Helmet>
            <title>Robodem | Примеры работ</title>
        </Helmet>
        <Intro/>
        <Cases/>
    </main>
);
