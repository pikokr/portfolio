
export let code = "._container_1bwp0_1 {\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  height: 50px;\n}\n\nul._menuContainer_1bwp0_8 li {\n  list-style: none;\n  vertical-align: middle;\n  text-align: center;\n  float: left;\n  padding: 10px;\n}\nul._menuContainer_1bwp0_8 li a {\n  font-size: 20px;\n  text-decoration: none;\n  color: #757575;\n  transition: color 0.15s ease-in-out;\n}\nul._menuContainer_1bwp0_8 li a:hover, ul._menuContainer_1bwp0_8 li a._active_1bwp0_21 {\n  color: #000;\n}\nul._menuContainer_1bwp0_8 li + li {\n  margin-left: 10px;\n}";
let json = {"container":"_container_1bwp0_1","menuContainer":"_menuContainer_1bwp0_8","active":"_active_1bwp0_21"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}