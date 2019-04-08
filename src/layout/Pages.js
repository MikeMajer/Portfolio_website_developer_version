import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Tools from '../pages/Tools';
import Experience from '../pages/Experience';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';


const Pages = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/tools" component={Tools} />
                <Route path="/experience" component={Experience} />
                <Route path="/contact" component={Contact} />
                <Route component={ErrorPage} />
            </Switch>
        </>

    );
}

export default Pages;