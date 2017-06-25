import React from "react"
import {Router, Route, browserHistory} from "react-router"
import {createApp} from "@phenomic/preset-react-app/lib/client"
import {Home} from './src/pages/home/Home.js';

export default createApp(() => (
    <Router history={browserHistory}>
        <Route path="/" component={Home}/>
    </Router>
));
