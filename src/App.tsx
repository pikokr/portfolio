import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Discord from './views/Discord'

const App = () => {
  return (
    <ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/discord" component={Discord} />
        </Switch>
      </Layout>
    </ScrollToTop>
  )
}

export default App
