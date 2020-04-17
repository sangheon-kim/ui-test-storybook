function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React from 'react';

___$insertStyle(".Button {\n  width: 100%;\n  height: 50px;\n  background-color: powderblue;\n}");

var Button = function Button() {
  return /*#__PURE__*/React.createElement("div", {
    className: "Button"
  }, "\uBC84\uD2BC");
};

___$insertStyle(".Input {\n  width: 100%;\n  height: 50px;\n  background-color: red;\n}");

var Input = function Input() {
  return /*#__PURE__*/React.createElement("div", {
    className: "Input"
  }, "\uC778\uD48B");
};

export { Button, Input };
