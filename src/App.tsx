import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Layout from './components/Layout'

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  )
}

export default App
