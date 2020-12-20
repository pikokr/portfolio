import __SNOWPACK_ENV__ from '../__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "../web_modules/react.js";
import ReactDOM from "../web_modules/react-dom.js";
import Root2 from "./Root.js";
import "./index.css.proxy.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(Root2, null), document.getElementById("root"));
if (import.meta.hot) {
  import.meta.hot.accept();
}
