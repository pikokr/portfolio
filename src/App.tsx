import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <ScrollToTop>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Layout>
    </ScrollToTop>
  )
}

export default App
