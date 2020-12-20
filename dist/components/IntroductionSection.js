import {Card, CardHeader, Grid, Typography, CardContent, List, ListItem, ListItemText, ListItemIcon, Divider} from "../../web_modules/@material-ui/core.js";
import React from "../../web_modules/react.js";
import CodeIcon from "../../web_modules/@material-ui/icons/Code.js";
import Book2 from "../../web_modules/@material-ui/icons/Book.js";
import Heart from "../../web_modules/@material-ui/icons/Favorite.js";
import {FontAwesomeIcon} from "../../web_modules/@fortawesome/react-fontawesome.js";
const IntroductionSection = () => {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "h4"
  }, "\uC790\uAE30\uC18C\uAC1C(?)"), /* @__PURE__ */ React.createElement(Grid, {
    container: true,
    spacing: 2,
    style: {padding: 10}
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, {
    title: "\uD504\uB85C\uADF8\uB798\uBC0D \uC5B8\uC5B4"
  }), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", null, "\uD30C\uB791\uC774\uAC00 \uD560\uC218 \uC788\uB294 \uD504\uB85C\uADF8\uB798\uBC0D \uC5B8\uC5B4 \uBAA9\uB85D"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, "Javascript"), /* @__PURE__ */ React.createElement("li", null, "Java"), /* @__PURE__ */ React.createElement("li", null, "Kotlin"), /* @__PURE__ */ React.createElement("li", null, "Typescript"), /* @__PURE__ */ React.createElement("li", null, "Python")), "\uD30C\uC774\uC36C\uC740 \uD560\uC904\uC740 \uC54C\uC9C0\uB9CC \uB4E4\uC5EC\uC4F0\uAE30 \uD610\uC624\uC99D(?)\uC774 \uC788\uB294 \uD30C\uB791\uC774\uB294 \uD30C\uC774\uC36C\uC744 \uC548\uC4F4\uB2F5\uB2C8\uB2E4!"))), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, {
    title: "\uC88B\uC544\uD558\uB294\uAC83"
  }), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(CodeIcon, null)), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: "\uD504\uB85C\uADF8\uB798\uBC0D",
    secondary: "\uD30C\uB791\uC774\uAC00 \uC798(?)\uD558\uB294\uAC83\uB4E4\uC911 \uD558\uB098\uC5D0\uC694!"
  })), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Book2, null)), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: "\uB77C\uC774\uD2B8\uB178\uBCA8",
    secondary: /* @__PURE__ */ React.createElement("span", {
      style: {textDecoration: "line-through"}
    }, "\uD30C\uB791\uC774\uB294 TS\uBB3C\uC744 \uB9CE\uC774 \uBCF8\uB2F5\uB2C8\uB2E4")
  })), /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Heart, null)), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: "\uADC0\uC5EC\uC6C0",
    secondary: "\uD30C\uB791\uC774\uB294 \uADC0\uC5EC\uC6B4\uAC78 \uBCF4\uBA74 \uD658\uC7A5(?)\uD55C\uB2F5\uB2C8\uB2E4!"
  }))))), /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 6,
    lg: 4
  }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, {
    title: "\uC2EB\uC5B4\uD558\uB294\uAC83"
  }), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(ListItem, null, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(FontAwesomeIcon, {
    icon: ["fas", "heart-broken"],
    size: "2x"
  })), /* @__PURE__ */ React.createElement(ListItemText, {
    primary: "\uC2F8\uC6B0\uAE30",
    secondary: "\uC804 \uC2F8\uC6B0\uB294\uAC8C \uC2EB\uC5B4\uC694! \uD3C9\uD654\uAC00 \uCD5C\uACE0\uC785\uB2C8\uB2E4!"
  })))))));
};
export default IntroductionSection;
