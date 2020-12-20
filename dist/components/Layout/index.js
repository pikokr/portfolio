import React, {Component} from "../../../web_modules/react.js";
import Header2 from "./Header.js";
import classes from "./Layout.module.css.proxy.js";
class Layout extends Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header2, null), /* @__PURE__ */ React.createElement("div", {
      style: {height: 80}
    }), /* @__PURE__ */ React.createElement("div", {
      className: classes.container
    }, this.props.children));
  }
}
export default Layout;
