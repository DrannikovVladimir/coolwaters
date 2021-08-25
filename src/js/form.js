"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
var Form = /*#__PURE__*/function (_React$Component) {
  _inherits(Form, _React$Component);

  var _super = _createSuper(Form);

  function Form(props) {
    var _this;

    _classCallCheck(this, Form);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "formatedDate", function (date) {
      var day = date.getDate();
      var month = date.getMonth() < 10 ? "0".concat(date.getMonth() + 1) : date.getMonth();
      var year = date.getFullYear();
      return "".concat(year, "-").concat(month, "-").concat(day);
    });

    _defineProperty(_assertThisInitialized(_this), "handleChangeCity", function (_ref) {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeAddress", function (_ref2) {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeDate", function (_ref3) {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangePhone", function (_ref4) {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeQuantityMinus", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeQuantityPlus", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangePompa", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleChangeCooler", function () {
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

    _defineProperty(_assertThisInitialized(_this), "getCityName", function (city) {
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

    _defineProperty(_assertThisInitialized(_this), "getFormattedDate", function () {
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

    _defineProperty(_assertThisInitialized(_this), "createObjectForSending", function () {
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

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "renderForm", function () {
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

    _defineProperty(_assertThisInitialized(_this), "renderFeedback", function () {
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

  _createClass(Form, [{
    key: "render",
    value: function render() {
      var status = this.state.status;
      return /*#__PURE__*/React.createElement(React.Fragment, null, status === 'filling' ? this.renderForm() : this.renderFeedback());
    }
  }]);

  return Form;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Form, null), document.querySelector('#form'));