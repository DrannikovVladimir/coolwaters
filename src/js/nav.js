"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-unused-vars */

/* eslint-disable no-undef */

/* eslint-disable quote-props */
var Burger = /*#__PURE__*/function (_React$Component) {
  _inherits(Burger, _React$Component);

  var _super = _createSuper(Burger);

  function Burger(props) {
    var _this;

    _classCallCheck(this, Burger);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleBurgerChange", function () {
      var status = _this.state.status;

      _this.setState({
        status: status === 'closed' ? 'opened' : 'closed'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getClassName", function () {
      var status = _this.state.status;
      var classes = {
        opened: 'nav--open',
        closed: 'nav--close'
      };
      return "main-header__nav nav ".concat(classes[status]);
    });

    _this.state = {
      status: 'closed'
    };
    return _this;
  }

  _createClass(Burger, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("nav", {
        className: this.getClassName()
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.handleBurgerChange,
        className: "nav__button"
      }, /*#__PURE__*/React.createElement("span", {
        className: "visually-hidden"
      }, "\u041C\u0435\u043D\u044E")), /*#__PURE__*/React.createElement("ul", {
        className: "main-header__nav-list nav-list"
      }, /*#__PURE__*/React.createElement("li", {
        className: "nav-list__item"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "nav-list__link"
      }, "\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438")), /*#__PURE__*/React.createElement("li", {
        className: "nav-list__item"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "nav-list__link"
      }, "\u041D\u0430\u043F\u0438\u0442\u043A\u0438")), /*#__PURE__*/React.createElement("li", {
        className: "nav-list__item"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "nav-list__link"
      }, "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435")), /*#__PURE__*/React.createElement("li", {
        className: "nav-list__item"
      }, /*#__PURE__*/React.createElement("a", {
        href: "#",
        className: "nav-list__link"
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))));
    }
  }]);

  return Burger;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Burger, null), document.querySelector('#nav'));