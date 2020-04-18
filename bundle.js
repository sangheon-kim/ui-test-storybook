'use strict';



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

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

___$insertStyle("@keyframes shrink {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n  }\n  100% {\n    -webkit-transform: scale3d(0.98, 0.98, 0.98);\n  }\n}\n.Button {\n  outline: none;\n  font-weight: 600;\n  background: #1e59ea;\n}\n.Button:disabled {\n  background-color: #666666;\n  color: rgba(0, 0, 0, 0.4);\n}\n.Button:disabled:hover {\n  background-color: #666666;\n  color: rgba(0, 0, 0, 0.4);\n}\n.Button:disabled:active {\n  background-color: #666666;\n  color: rgba(0, 0, 0, 0.4);\n}\n.Button.small {\n  width: 106px;\n  height: 38px;\n  border-radius: 4px;\n  border-top-right-radius: 16px;\n  font-size: 16px;\n}\n.Button.medium {\n  width: 125px;\n  height: 45px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 5px;\n  border-top-right-radius: 13px;\n  font-family: \"Noto Sans KR\";\n}\n@media (max-width: 768px) {\n  .Button.medium {\n    width: 100%;\n    height: 35px;\n    font-size: 13px;\n    border-top-right-radius: 15px;\n  }\n}\n.Button.large {\n  width: 352px;\n  height: 70px;\n  border-radius: 10px;\n  font-size: 20px;\n  border-top-right-radius: 25px;\n  font-family: \"Noto Sans KR\";\n}\n@media (max-width: 768px) {\n  .Button.large {\n    width: 100%;\n    height: 65px;\n  }\n}\n.Button.community-edit {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 100px;\n  height: 33px;\n  font-size: 14px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.43;\n  text-align: left;\n  color: #fff;\n  padding: 5px 14px;\n  background: #666666;\n  border-radius: 7px;\n  cursor: pointer;\n}\n.Button:hover {\n  color: #fff !important;\n}\n.Button.join {\n  width: 137px;\n  height: 50px;\n  font-size: 16px;\n  font-weight: 700;\n  font-size: 16px;\n}\n@media (max-width: 768px) {\n  .Button.join {\n    width: 100%;\n    height: 35px;\n    font-size: 12px;\n  }\n}\n.Button.light-gray {\n  background: #eeeeee;\n  border: solid 1px #1e59ea;\n  color: #666666;\n}\n.Button.light-gray:hover {\n  background: #d5d5d5;\n  color: #1e59ea;\n  animation-duration: 0.5s;\n  animation-fill-mode: both;\n  animation-name: shrink;\n}\n.Button.light-gray:active {\n  background: #d5d5d5;\n}\n.Button.light-gray.outline {\n  color: #eeeeee;\n  background: none;\n  border: 2px solid #eeeeee;\n}\n.Button.light-gray.outline:hover {\n  background: white;\n  color: #fff;\n}\n.Button.light-gray.outline:active {\n  background: #d5d5d5;\n  color: #fff;\n}\n.Button.light-gray:disabled:hover {\n  color: transparent;\n}\n.Button.blue {\n  background: #1e59ea;\n  color: white;\n}\n.Button.blue:hover {\n  background: #1245c3;\n  color: #1e59ea;\n  animation-duration: 0.5s;\n  animation-fill-mode: both;\n  animation-name: shrink;\n}\n.Button.blue:active {\n  background: #1245c3;\n}\n.Button.blue.outline {\n  color: #1e59ea;\n  background: none;\n  border: 2px solid #1e59ea;\n}\n.Button.blue.outline:hover {\n  background: #4d7bee;\n  color: #fff;\n}\n.Button.blue.outline:active {\n  background: #1245c3;\n  color: #fff;\n}\n.Button.blue:disabled:hover {\n  color: transparent;\n}\n.Button.gray {\n  background: #fff;\n  border: solid 2px #666666;\n  color: #666666;\n}\n.Button.gray:hover {\n  background: #e6e6e6;\n  color: #1e59ea;\n  animation-duration: 0.5s;\n  animation-fill-mode: both;\n  animation-name: shrink;\n}\n.Button.gray:active {\n  background: #e6e6e6;\n}\n.Button.gray.outline {\n  color: #fff;\n  background: none;\n  border: 2px solid #fff;\n}\n.Button.gray.outline:hover {\n  background: white;\n  color: #fff;\n}\n.Button.gray.outline:active {\n  background: #e6e6e6;\n  color: #fff;\n}\n.Button.gray:disabled:hover {\n  color: transparent;\n}\n.Button.gray:hover {\n  background: #666666;\n  color: #fff;\n}\n.Button.gray:hover:hover {\n  background: #4d4d4d;\n  color: #1e59ea;\n  animation-duration: 0.5s;\n  animation-fill-mode: both;\n  animation-name: shrink;\n}\n.Button.gray:hover:active {\n  background: #4d4d4d;\n}\n.Button.gray:hover.outline {\n  color: #666666;\n  background: none;\n  border: 2px solid #666666;\n}\n.Button.gray:hover.outline:hover {\n  background: gray;\n  color: #fff;\n}\n.Button.gray:hover.outline:active {\n  background: #4d4d4d;\n  color: #fff;\n}\n.Button.gray:hover:disabled:hover {\n  color: transparent;\n}\n.Button.full-gray {\n  background-color: #666666;\n  border: solid 1px #666666;\n  color: #fff;\n}\n.Button.full-gray:hover {\n  color: #666666 !important;\n  background-color: #fff;\n}\n.Button.white {\n  background-color: #fff;\n  border: solid 2px #1e59ea;\n  color: #1e59ea;\n}\n.Button.white:hover {\n  background-color: #1e59ea;\n}\n.Button.right {\n  border-radius: 4px;\n  border-top-right-radius: 24px;\n}\n.Button.left {\n  border-radius: 4px;\n  border-top-left-radius: 24px;\n}");

/** `Button` 컴포넌트는 사용자의 클릭에 반응하여 트리거할 것을 정의할 때 사용 */
var Button = function Button(_ref) {
  var children = _ref.children,
      size = _ref.size,
      className = _ref.className,
      outline = _ref.outline,
      direction = _ref.direction,
      color = _ref.color,
      rest = _objectWithoutProperties(_ref, ["children", "size", "className", "outline", "direction", "color"]);

  return /*#__PURE__*/React.createElement("button", Object.assign({
    className: "Button ".concat(size, " ").concat(color, " ").concat(direction, " ").concat(outline ? "outline" : "none", " ").concat(className)
  }, rest), children);
};
Button.defaultProps = {
  size: "large",
  color: "blue",
  direction: "right"
};

___$insertStyle(".c-Input {\n  display: flex;\n  align-items: center;\n}\n.c-Input .Input {\n  font-size: 16px;\n  padding-left: 20px;\n  outline: none;\n  font-family: inherit;\n  box-sizing: border-box;\n  width: 100%;\n}\n.c-Input .Input::placeholder {\n  font-size: 16px;\n  color: #cccccc;\n  font-family: inherit;\n}\n.c-Input .Input.large {\n  width: 352px;\n  height: 50px;\n}\n.c-Input .Input.small {\n  width: 90px;\n  height: 40px;\n  padding-left: 8px;\n}\n.c-Input .Input.login {\n  border: solid 1px #aaaaaa;\n  font-weight: 500;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n  margin-bottom: 5px;\n}\n@media (max-width: 768px) {\n  .c-Input .Input.login {\n    margin-bottom: 0px;\n  }\n}\n.c-Input .Input.join {\n  border: solid 1px #ccc;\n  font-weight: 500;\n  font-family: inherit;\n}\n.c-Input .Input.search {\n  border: none;\n  width: 100%;\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 1.45;\n  font-family: \"Franklin Gothic Medium\", \"Arial Narrow\", Arial, sans-serif;\n}\n@media (max-width: 768px) {\n  .c-Input .Input.search {\n    font-size: 13px;\n  }\n}\n.c-Input .Input.search::placeholder {\n  font-size: 20px;\n  color: #666666;\n}\n@media (max-width: 767px) {\n  .c-Input .Input.search::placeholder {\n    font-size: 14px;\n  }\n}\n.c-Input svg {\n  margin: 0 20px;\n}\n@media (max-width: 768px) {\n  .c-Input svg {\n    width: 20px;\n    height: 20px;\n  }\n}");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _ref = /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("clipPath", {
  id: "search_svg__clip-path"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 0h30v30H0z",
  className: "search_svg__cls-1"
})), /*#__PURE__*/React.createElement("style", null, ".search_svg__cls-1{fill:none}"));

var _ref2 = /*#__PURE__*/React.createElement("g", {
  id: "search_svg__Search",
  clipPath: "url(#search_svg__clip-path)"
}, /*#__PURE__*/React.createElement("path", {
  id: "search_svg__Rectangle_176",
  d: "M0 0h30v30H0z",
  className: "search_svg__cls-1",
  "data-name": "Rectangle 176"
}), /*#__PURE__*/React.createElement("path", {
  id: "search_svg__Path_99",
  d: "M29.9 27.267l-6.206-6.206a12.875 12.875 0 002.633-7.9A13.083 13.083 0 0013.164 0 13.083 13.083 0 000 13.164a13.083 13.083 0 0013.164 13.163 12.875 12.875 0 007.9-2.633l6.203 6.206zM3.761 13.164a9.311 9.311 0 019.4-9.4 9.311 9.311 0 019.4 9.4 9.311 9.311 0 01-9.4 9.4 9.311 9.311 0 01-9.4-9.4z",
  "data-name": "Path 99",
  fill: "#1e59ea"
}));

function SvgSearch(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 30,
    height: 30
  }, props), _ref, _ref2);
}

var icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  search: SvgSearch
});

/** 아이콘을 보여주고 싶을 땐 `Icon` 컴포넌트를 사용하세요.
 *
 * 이 컴포넌트는 svg 형태로 아이콘을 보여주며, props 또는 스타일을 사용하여 아이콘의 색상과 크기를 정의 할 수 있습니다.
 *
 * 스타일로 모양새를 설정 할 때에는 `color`로 색상을 설정하고 `width`로 크기를 설정하세요.
 */
var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;
  var SVGIcon = icons[icon];
  return /*#__PURE__*/React__default.createElement(SVGIcon, {
    style: {
      color: color,
      width: size
    },
    className: className
  });
};

/** `Input` 컴포넌트는 사용자의 입력을 받아 Form 처리시 사용  */
var Input = function Input(_ref) {
  var className = _ref.className,
      placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      value = _ref.value,
      name = _ref.name,
      type = _ref.type,
      size = _ref.size,
      view = _ref.view,
      onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "placeholder", "onChange", "value", "name", "type", "size", "view", "onClick"]);

  var handleEnter = function handleEnter(e) {
    if (e.charCode === 13) {
      onClick(value);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "c-Input"
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    className: "Input ".concat(className, " ").concat(size, " ").concat(view),
    name: name,
    value: value,
    placeholder: placeholder,
    onChange: onChange,
    type: type,
    onKeyPress: function onKeyPress(e) {
      view === "search" && handleEnter(e);
    },
    autoComplete: view === "search" ? "off" : "on"
  }, rest)), view === "search" && /*#__PURE__*/React.createElement(Icon, {
    icon: "search"
  }));
};
Input.defaultProps = {
  size: "large",
  view: "login",
  type: "text"
};

exports.Button = Button;
exports.Input = Input;
