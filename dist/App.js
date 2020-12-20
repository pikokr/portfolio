import React from "../web_modules/react.js";
import {Route, Switch} from "../web_modules/react-router-dom.js";
import Layout2 from "./components/Layout/index.js";
import HomePage from "./views/Home/index.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(Route, {
    render: ({location}) => /* @__PURE__ */ React.createElement(Layout2, null, /* @__PURE__ */ React.createElement(Switch, {
      location
    }, /* @__PURE__ */ React.createElement(Route, {
      exact: true,
      path: "/",
      component: HomePage
    })))
  });
};
export default App;
