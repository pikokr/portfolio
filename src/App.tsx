import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './views/About';
import HomePage from './views/Home';

const App = () => {
  return (
    <Route
      render={({ location }) => (
        <Layout>
          <Switch location={location}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
          </Switch>
        </Layout>
      )}
    />
  );
};

export default App;
