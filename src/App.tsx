import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Layout>
      <ScrollToTop>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </ScrollToTop>
    </Layout>
  )
}

export default App
