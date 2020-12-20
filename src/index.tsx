import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import './index.css'
import './fontAwesome'

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
