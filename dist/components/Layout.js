import React from "../../web_modules/react.js";
import {AppBar, createMuiTheme, CssBaseline, IconButton, MuiThemeProvider, Toolbar, Typography} from "../../web_modules/@material-ui/core.js";
import Brightness72 from "../../web_modules/@material-ui/icons/Brightness7.js";
import Menu2 from "../../web_modules/@material-ui/icons/Menu.js";
const Layout = ({children, drawer, setDrawer}) => {
  const [dark, setDark] = React.useState(Boolean(localStorage.dark));
  const theme = createMuiTheme({
    palette: {
      mode: dark ? "dark" : "light"
    }
  });
  return /* @__PURE__ */ React.createElement(MuiThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(AppBar, {
    style: {boxShadow: "none", position: "fixed"},
    color: "transparent"
  }, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement("div", {
    style: {flexGrow: 1}
  }), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => {
      if (dark) {
        delete localStorage.dark;
      } else {
        localStorage.dark = 1;
      }
      setDark(!dark);
    }
  }, /* @__PURE__ */ React.createElement(Brightness72, null)), /* @__PURE__ */ React.createElement(IconButton, {
    style: {marginLeft: 5},
    onClick: () => {
      setDrawer(true);
    }
  }, /* @__PURE__ */ React.createElement(Menu2, null)))), children);
};
export default Layout;
