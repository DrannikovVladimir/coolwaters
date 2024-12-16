"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
var Form = /*#__PURE__*/function (_React$Component) {
  function Form(props) {
    var _this;
    _classCallCheck(this, Form);
    _this = _callSuper(this, Form, [props]);
    _defineProperty(_this, "formatedDate", function (date) {
      var day = date.getDate();
      var month = date.getMonth() < 10 ? "0".concat(date.getMonth() + 1) : date.getMonth();
      var year = date.getFullYear();
      return "".concat(year, "-").concat(month, "-").concat(day);
    });
    _defineProperty(_this, "handleChangeCity", function (_ref) {
      var target = _ref.target;
      var _this$state = _this.state,
        form = _this$state.form,
        status = _this$state.status;
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          city: target.value
        })
      });
    });
    _defineProperty(_this, "handleChangeAddress", function (_ref2) {
      var target = _ref2.target;
      var _this$state2 = _this.state,
        form = _this$state2.form,
        status = _this$state2.status;
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          address: target.value
        })
      });
    });
    _defineProperty(_this, "handleChangeDate", function (_ref3) {
      var target = _ref3.target;
      var _this$state3 = _this.state,
        form = _this$state3.form,
        status = _this$state3.status;
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          date: target.value
        })
      });
    });
    _defineProperty(_this, "handleChangePhone", function (_ref4) {
      var target = _ref4.target;
      var _this$state4 = _this.state,
        form = _this$state4.form,
        status = _this$state4.status;
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          phone: target.value
        })
      });
    });
    _defineProperty(_this, "handleChangeQuantityMinus", function () {
      var _this$state5 = _this.state,
        form = _this$state5.form,
        status = _this$state5.status;
      var quantity = form.quantity;
      if (quantity === 1) {
        _this.setState({
          status: status,
          form: _objectSpread(_objectSpread({}, form), {}, {
            quantity: 1,
            price: 500
          })
        });
        return;
      }
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          quantity: quantity - 1,
          price: 500 * (quantity - 1)
        })
      });
    });
    _defineProperty(_this, "handleChangeQuantityPlus", function () {
      var _this$state6 = _this.state,
        form = _this$state6.form,
        status = _this$state6.status;
      var quantity = form.quantity;
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          quantity: quantity + 1,
          price: 500 * (quantity + 1)
        })
      });
    });
    _defineProperty(_this, "handleChangePompa", function () {
      var _this$state7 = _this.state,
        form = _this$state7.form,
        status = _this$state7.status;
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          pompa: !_this.state.form.pompa
        })
      });
    });
    _defineProperty(_this, "handleChangeCooler", function () {
      var _this$state8 = _this.state,
        form = _this$state8.form,
        status = _this$state8.status;
      _this.setState({
        status: status,
        form: _objectSpread(_objectSpread({}, form), {}, {
          cooler: !_this.state.form.cooler
        })
      });
    });
    _defineProperty(_this, "getCityName", function (city) {
      var cities = {
        'karaganda': 'Караганда',
        'temirtau': 'Темиртау',
        'abay': 'Абай',
        'saran': 'Сарань',
        'shahtinsk': 'Шахтинск',
        'shahan': 'Шахан',
        'aktas': 'Актас'
      };
      return cities[city];
    });
    _defineProperty(_this, "getFormattedDate", function () {
      var months = {
        '01': 'Января',
        '02': 'Февраля',
        '03': 'Марта',
        '04': 'Апреля',
        '05': 'Мая',
        '06': 'Июня',
        '07': 'Июля',
        '08': 'Августа',
        '09': 'Сентября',
        '10': 'Октября',
        '11': 'Ноября',
        '12': 'Декабря'
      };
      var date = _this.state.form.date;
      var formatedDate = date.split('-').reverse();
      var _formatedDate = _slicedToArray(formatedDate, 3),
        day = _formatedDate[0],
        month = _formatedDate[1],
        year = _formatedDate[2];
      return "".concat(day, " ").concat(months[month], " ").concat(year);
    });
    _defineProperty(_this, "createObjectForSending", function () {
      var form = _this.state.form;
      return Object.entries(form).reduce(function (acc, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
          key = _ref6[0],
          value = _ref6[1];
        if (value) {
          acc[key] = value;
          if (key === 'pompa') {
            acc[key] = 'Помпа';
          }
          if (key === 'cooler') {
            acc[key] = 'Диспенсер';
          }
          if (key === 'date') {
            acc[key] = _this.getFormattedDate();
          }
          if (key === 'city') {
            acc[key] = _this.getCityName(value);
          }
        }
        return acc;
      }, {});
    });
    _defineProperty(_this, "handleSubmit", function (e) {
      e.preventDefault();
      _this.buttonRef.current.disabled = true;
      _this.cityRef.current.disabled = true;
      _this.addressRef.current.disabled = true;
      _this.dateRef.current.disabled = true;
      _this.phoneRef.disabled = true;
      _this.pompaRef.current.disabled = true;
      _this.coolerRef.current.disabled = true;
      var formData = _this.createObjectForSending();
      window.emailjs.send('service_xrtom7j', 'template_16wbtra', formData, 'user_3QIXDooOoykxAufDOyptx').then(function (result) {
        console.log(result.text);
        _this.setState({
          status: 'finished'
        });
        console.log(_this.state.status);
      }, function (error) {
        console.log(error.text);
        _this.setState({
          status: 'error'
        });
      });
      e.target.reset();
    });
    _defineProperty(_this, "renderForm", function () {
      var _this$state$form = _this.state.form,
        city = _this$state$form.city,
        address = _this$state$form.address,
        date = _this$state$form.date,
        phone = _this$state$form.phone,
        quantity = _this$state$form.quantity,
        price = _this$state$form.price,
        pompa = _this$state$form.pompa,
        cooler = _this$state$form.cooler;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: _this.handleSubmit,
        className: "water-order__form form-water"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-water__group"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper form-water__input-wrapper--left"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "city",
        className: "form-water__label"
      }, "\u0413\u043E\u0440\u043E\u0434"), /*#__PURE__*/React.createElement("select", {
        id: "city",
        name: "city",
        onChange: _this.handleChangeCity,
        value: city,
        className: "form-water__input form-water__input--select",
        size: "1",
        ref: _this.cityRef
      }, /*#__PURE__*/React.createElement("option", {
        value: "karaganda"
      }, "\u041A\u0430\u0440\u0430\u0433\u0430\u043D\u0434\u0430"), /*#__PURE__*/React.createElement("option", {
        value: "temirtau"
      }, "\u0422\u0435\u043C\u0438\u0440\u0442\u0430\u0443"), /*#__PURE__*/React.createElement("option", {
        value: "abay"
      }, "\u0410\u0431\u0430\u0439"), /*#__PURE__*/React.createElement("option", {
        value: "saran"
      }, "\u0421\u0430\u0440\u0430\u043D\u044C"), /*#__PURE__*/React.createElement("option", {
        value: "shahtinsk"
      }, "\u0428\u0430\u0445\u0442\u0438\u043D\u0441\u043A"), /*#__PURE__*/React.createElement("option", {
        value: "shahan"
      }, "\u0428\u0430\u0445\u0430\u043D"), /*#__PURE__*/React.createElement("option", {
        value: "aktas"
      }, "\u0410\u043A\u0442\u0430\u0441"))), /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper form-water__input-wrapper--right"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "address",
        className: "form-water__label"
      }, "\u0423\u043B\u0438\u0446\u0430, \u0434\u043E\u043C"), /*#__PURE__*/React.createElement("input", {
        id: "address",
        onChange: _this.handleChangeAddress,
        value: address,
        type: "text",
        name: "address",
        className: "form-water__input",
        placeholder: "\u0443\u043B.\u0410\u0431\u0430\u044F 1, \u043A\u0432.1",
        ref: _this.addressRef
      }))), /*#__PURE__*/React.createElement("div", {
        className: "form-water__group"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper form-water__input-wrapper--left"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "date",
        className: "form-water__label"
      }, "\u0414\u0430\u0442\u0430 \u043F\u043E\u0441\u0442\u0430\u0432\u043A\u0438"), /*#__PURE__*/React.createElement("input", {
        id: "date",
        onChange: _this.handleChangeDate,
        value: date,
        type: "date",
        name: "date",
        className: "form-water__input",
        ref: _this.dateRef
      })), /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper form-water__input-wrapper--right"
      }, /*#__PURE__*/React.createElement("label", {
        htmlFor: "phone",
        className: "form-water__label"
      }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D"), /*#__PURE__*/React.createElement(ReactInputMask, {
        inputRef: _this.setPhoneRef,
        id: "phone",
        name: "phone",
        className: "form-water__input",
        mask: "+7\\(999)999-99-99",
        value: phone,
        onChange: _this.handleChangePhone,
        alwaysShowMask: true
      }))), /*#__PURE__*/React.createElement("div", {
        className: "form-water__group form-water__group--quantity"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper form-water__input-wrapper--left"
      }, /*#__PURE__*/React.createElement("p", {
        className: "form-water__label"
      }, "\u041A\u043E\u043B-\u0432\u043E \u0448\u0442."), /*#__PURE__*/React.createElement("div", {
        className: "form-water__button-quantity-wrapper"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: _this.handleChangeQuantityMinus,
        className: "form-water__button-quantity form-water__button-quantity--minus",
        type: "button"
      }, /*#__PURE__*/React.createElement("span", {
        className: "visually-hidden"
      }, "\u043C\u0438\u043D\u0443\u0441")), /*#__PURE__*/React.createElement("p", {
        className: "form-water__quantity"
      }, quantity), /*#__PURE__*/React.createElement("button", {
        onClick: _this.handleChangeQuantityPlus,
        className: "form-water__button-quantity form-water__button-quantity--plus",
        type: "button"
      }, /*#__PURE__*/React.createElement("span", {
        className: "visually-hidden"
      }, "\u043F\u043B\u044E\u0441")))), /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper form-water__input-wrapper--right"
      }, /*#__PURE__*/React.createElement("p", {
        className: "form-water__label"
      }, "\u0414\u043E\u043F.\u043E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435"), /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper form-water__input-wrapper--equipment"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "pompa",
        type: "checkbox",
        name: "pompa",
        onChange: _this.handleChangePompa,
        className: "form-water__input-equipment visually-hidden",
        checked: pompa,
        ref: _this.pompaRef
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "pompa",
        className: "form-water__label-equipment"
      }, "\u041F\u043E\u043C\u043F\u0430")), /*#__PURE__*/React.createElement("div", {
        className: "form-water__input-wrapper-group"
      }, /*#__PURE__*/React.createElement("input", {
        id: "cooler",
        type: "checkbox",
        name: "cooler",
        onChange: _this.handleChangeCooler,
        className: "form-water__input-equipment visually-hidden",
        checked: cooler,
        ref: _this.coolerRef
      }), /*#__PURE__*/React.createElement("label", {
        htmlFor: "cooler",
        className: "form-water__label-equipment"
      }, "\u0414\u0438\u0441\u043F\u0435\u043D\u0441\u0435\u0440"))))), /*#__PURE__*/React.createElement("div", {
        className: "form-water__group form-water__group--total"
      }, /*#__PURE__*/React.createElement("div", {
        className: "form-water__total-wrapper"
      }, /*#__PURE__*/React.createElement("p", {
        className: "form-water__total"
      }, "\u0418\u0442\u043E\u0433\u043E:", /*#__PURE__*/React.createElement("span", {
        className: "form-water__total-number"
      }, price, ' ', 'тг.'))), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        className: "form-water__button btn",
        ref: _this.buttonRef
      }, "\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437")));
    });
    _defineProperty(_this, "renderFeedback", function () {
      console.log('Render Feedback');
      return /*#__PURE__*/React.createElement("div", {
        className: "water-order__feedback feedback-form"
      }, /*#__PURE__*/React.createElement("h3", {
        className: "feedback-form__title"
      }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u0417\u0430\u044F\u0432\u043A\u0430 \u043F\u0440\u0438\u043D\u044F\u0442\u0430"), /*#__PURE__*/React.createElement("p", {
        className: "feedback-form__text"
      }, "\u041D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432\xA0\u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0438 \u0443\u0442\u043E\u0447\u043D\u0438\u0442 \u0432\u0441\u0435\xA0\u0434\u0435\u0442\u0430\u043B\u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"));
    });
    _this.buttonRef = React.createRef();
    _this.cityRef = React.createRef();
    _this.addressRef = React.createRef();
    _this.dateRef = React.createRef();
    _this.phoneRef = null;
    _this.setPhoneRef = function (el) {
      _this.phoneRef = el;
    };
    _this.pompaRef = React.createRef();
    _this.coolerRef = React.createRef();
    _this.state = {
      form: {
        city: 'karaganda',
        address: '',
        date: _this.formatedDate(new Date()),
        phone: '',
        quantity: 1,
        pompa: false,
        cooler: false,
        price: 500
      },
      status: 'filling'
    };
    return _this;
  }
  _inherits(Form, _React$Component);
  return _createClass(Form, [{
    key: "render",
    value: function render() {
      var status = this.state.status;
      return /*#__PURE__*/React.createElement(React.Fragment, null, status === 'filling' ? this.renderForm() : this.renderFeedback());
    }
  }]);
}(React.Component);
ReactDOM.render(/*#__PURE__*/React.createElement(Form, null), document.querySelector('#form'));