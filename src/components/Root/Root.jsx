import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// custom components
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';

// custom styles
import './assets/styles/index.scss';


// here would go some application default layout, if it exist
// in our case just simple router
const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);


export default Root;
