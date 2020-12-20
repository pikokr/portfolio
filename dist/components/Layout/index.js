import React, {Component} from "../../../web_modules/react.js";
import Header2 from "./Header.js";
class Layout extends Component {
  render() {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header2, null), this.props.children);
  }
}
export default Layout;
