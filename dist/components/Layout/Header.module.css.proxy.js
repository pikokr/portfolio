
export let code = "._container_1y3dk_1 {\n  padding: 10px 15px 10px 20px;\n  display: flex;\n  align-items: center;\n  height: 50px;\n  position: fixed;\n  background: #fff;\n  border-bottom: 1px solid #000;\n  width: calc(100vw - 35px);\n  left: 0;\n  top: 0;\n}\n\nul._menuContainer_1y3dk_14 li {\n  list-style: none;\n  vertical-align: middle;\n  text-align: center;\n  float: left;\n  padding: 10px;\n}\nul._menuContainer_1y3dk_14 li a {\n  font-size: 20px;\n  text-decoration: none;\n  color: #757575;\n  transition: color 0.15s ease-in-out;\n}\nul._menuContainer_1y3dk_14 li a:hover, ul._menuContainer_1y3dk_14 li a._active_1y3dk_27 {\n  color: #000;\n}\nul._menuContainer_1y3dk_14 li + li {\n  margin-left: 10px;\n}";
let json = {"container":"_container_1y3dk_1","menuContainer":"_menuContainer_1y3dk_14","active":"_active_1y3dk_27"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}