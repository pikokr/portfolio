import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Root from './Root'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
