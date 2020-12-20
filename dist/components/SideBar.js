import {FontAwesomeIcon} from "../../web_modules/@fortawesome/react-fontawesome.js";
import {Drawer, IconButton, ListItem, ListItemText, Toolbar, Typography, ListItemIcon} from "../../web_modules/@material-ui/core.js";
import Home2 from "../../web_modules/@material-ui/icons/Home.js";
import Introduction from "../../web_modules/@material-ui/icons/Info.js";
import React from "../../web_modules/react.js";
const SideBar = ({open, onClose}) => {
  return /* @__PURE__ */ React.createElement(Drawer, {
    open,
    onClose,
    anchor: "right",
    style: {display: "flex", flexDirection: "column"}
  }, /* @__PURE__ */ React.createElement(ListItem, {
    button: true,
    href: "#home",
    component: "a",
    onClick: onClose
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Home2, null)), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: "\uD648"
  })), /* @__PURE__ */ React.createElement(ListItem, {
    button: true,
    href: "#introduction",
    component: "a",
    onClick: onClose
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Introduction, null)), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: "\uC18C\uAC1C"
  })), /* @__PURE__ */ React.createElement("div", {
    style: {flexGrow: 1}
  }), /* @__PURE__ */ React.createElement(Toolbar, {
    style: {padding: 5, paddingRight: 10}
  }, /* @__PURE__ */ React.createElement(IconButton, {
    style: {marginRight: 5},
    color: "inherit",
    href: "https://github.com/pikokr/portfolio",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fab", "github"]
  })), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6"
  }, "2020 \xA9 PIKOSTUDIO")));
};
export default SideBar;
