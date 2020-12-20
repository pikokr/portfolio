import {FontAwesomeIcon} from "../../web_modules/@fortawesome/react-fontawesome.js";
import {IconButton, Typography} from "../../web_modules/@material-ui/core.js";
import React from "../../web_modules/react.js";
const MainSection = () => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {textAlign: "center"}
  }, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h3"
  }, "\uD30C\uB791\uC774"), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "UniqueCode \uC18C\uC18D \uAC1C\uBC1C\uC790"), /* @__PURE__ */ React.createElement(IconButton, {
    href: "https://github.com/pikokr",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fab", "github"]
  })), /* @__PURE__ */ React.createElement(IconButton, {
    style: {marginLeft: 5},
    href: "mailto:parangee9706@gmail.com"
  }, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fas", "envelope"]
  })));
};
export default MainSection;
