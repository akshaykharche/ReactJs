import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './Components/App';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Course from './Components/Course/Course';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
         <Route path='course' component={Course} />
    </Route>
);