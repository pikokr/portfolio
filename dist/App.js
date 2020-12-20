import React from "../web_modules/react.js";
import "./App.css.proxy.js";
import Layout2 from "./components/Layout.js";
import ReactFullpage from "../web_modules/@fullpage/react-fullpage.js";
import SideBar2 from "./components/SideBar.js";
import MainSection from "./components/Main.js";
import IntroductionSection2 from "./components/IntroductionSection.js";
function App2() {
  const [drawer, setDrawer] = React.useState(false);
  return /* @__PURE__ */ React.createElement(Layout2, {
    drawer,
    setDrawer
  }, /* @__PURE__ */ React.createElement(ReactFullpage, {
    scrollOverflow: true,
    anchors: ["home", "introduction"],
    licenseKey: "7A6BD9E1-8D334350-80A4BC34-64E1097D",
    scrollingSpeed: 1e3,
    render: (props) => {
      return /* @__PURE__ */ React.createElement(ReactFullpage.Wrapper, null, /* @__PURE__ */ React.createElement(SideBar2, {
        open: drawer,
        onClose: () => setDrawer(false),
        fullpage: props.fullpageApi
      }), /* @__PURE__ */ React.createElement("div", {
        className: "section sectionCentered"
      }, /* @__PURE__ */ React.createElement(MainSection, null)), /* @__PURE__ */ React.createElement("div", {
        className: "section sectionCentered"
      }, /* @__PURE__ */ React.createElement(IntroductionSection2, null)));
    }
  }));
}
export default App2;
