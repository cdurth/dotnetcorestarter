import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Counter from '../containers/Counter';
import Login from '../containers/Login';
import Time from '../containers/Time';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/counter" component={Counter} />
            <Route path="/time" component={Time} />
            <Route path="/login" component={Login} />
        </Switch>
    </main>
);
export default Main;