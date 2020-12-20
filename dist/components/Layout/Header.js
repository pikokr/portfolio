import React from "../../../web_modules/react.js";
import {
  Link as RouterLink,
  withRouter
} from "../../../web_modules/react-router-dom.js";
import classes from "./Header.module.css.proxy.js";
import clsx2 from "../../../web_modules/clsx.js";
const Link = withRouter(({to, children}) => {
  return /* @__PURE__ */ React.createElement(RouterLink, {
    to,
    className: clsx2({
      [classes.active]: location.pathname === to
    })
  }, children);
});
const Header = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.container
  }, /* @__PURE__ */ React.createElement("h2", null, "\uD30C\uB791\uC774"), /* @__PURE__ */ React.createElement("div", {
    style: {flexGrow: 1}
  }), /* @__PURE__ */ React.createElement("ul", {
    className: classes.menuContainer
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "About")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/projects"
  }, "Projects"))));
};
export default Header;
