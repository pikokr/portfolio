
export let code = "._container_1vk5u_1 {\n  padding-left: 10px;\n  padding-right: 10px;\n}";
let json = {"container":"_container_1vk5u_1"};
export default json;

// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}