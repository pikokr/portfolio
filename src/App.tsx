import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './views/Home';

const App = () => {
    return (
        <Route render={({ location }) => (
            <Switch location={location}>
                <Route exact path="/" component={HomePage} />
            </Switch>
        )} />
    );
};

export default App;