/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    this.cityRef = React.createRef();
    this.addressRef = React.createRef();
    this.dateRef = React.createRef();
    this.phoneRef = null;
    this.setPhoneRef = (el) => {
      this.phoneRef = el;
    };
    this.pompaRef = React.createRef();
    this.coolerRef = React.createRef();
    this.state = {
      form: {
        city: 'karaganda',
        address: '',
        date: this.formatedDate(new Date()),
        phone: '',
        quantity: 1,
        pompa: false,
        cooler: false,
        price: 500,
      },
      status: 'filling',
    };
  }

  formatedDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  handleChangeCity = ({ target }) => {
    const { form, status } = this.state;
    this.setState({ status, form: { ...form, city: target.value } });
  };

  handleChangeAddress = ({ target }) => {
    const { form, status } = this.state;
    this.setState({ status, form: { ...form, address: target.value } });
  };

  handleChangeDate = ({ target }) => {
    const { form, status } = this.state;
    this.setState({ status, form: { ...form, date: target.value } });
  };

  handleChangePhone = ({ target }) => {
    const { form, status } = this.state;
    this.setState({ status, form: { ...form, phone: target.value } });
  };

  handleChangeQuantityMinus = () => {
    const { form, status } = this.state;
    const { quantity } = form;
    if (quantity === 1) {
      this.setState({ status, form: { ...form, quantity: 1, price: 500 } });
      return;
    }
    this.setState({
      status,
      form: { ...form, quantity: quantity - 1, price: 500 * (quantity - 1) },
    });
  };

  handleChangeQuantityPlus = () => {
    const { form, status } = this.state;
    const { quantity } = form;
    this.setState({
      status,
      form: { ...form, quantity: quantity + 1, price: 500 * (quantity + 1) },
    });
  };

  handleChangePompa = () => {
    const { form, status } = this.state;
    this.setState({ status, form: { ...form, pompa: !this.state.form.pompa } });
  };

  handleChangeCooler = () => {
    const { form, status } = this.state;
    this.setState({ status, form: { ...form, cooler: !this.state.form.cooler } });
  }

  getCityName = (city) => {
    const cities = {
      'karaganda': 'Караганда',
      'temirtau': 'Темиртау',
      'abay': 'Абай',
      'saran': 'Сарань',
      'shahtinsk': 'Шахтинск',
      'shahan': 'Шахан',
      'aktas': 'Актас',
    };

    return cities[city];
  };

  getFormattedDate = () => {
    const months = {
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
      '12': 'Декабря',
    };
    const { date } = this.state.form;
    const formatedDate = date.split('-').reverse();
    const [day, month, year] = formatedDate;

    return `${day} ${months[month]} ${year}`;
  };

  createObjectForSending = () => {
    const { form } = this.state;

    return Object.entries(form)
      .reduce((acc, [key, value]) => {
        if (value) {
          acc[key] = value;
          if (key === 'pompa') {
            acc[key] = 'Помпа';
          }
          if (key === 'cooler') {
            acc[key] = 'Диспенсер';
          }
          if (key === 'date') {
            acc[key] = this.getFormattedDate();
          }
          if (key === 'city') {
            acc[key] = this.getCityName(value);
          }
        }
        return acc;
      }, {});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.buttonRef.current.disabled = true;
    this.cityRef.current.disabled = true;
    this.addressRef.current.disabled = true;
    this.dateRef.current.disabled = true;
    this.phoneRef.disabled = true;
    this.pompaRef.current.disabled = true;
    this.coolerRef.current.disabled = true;

    const formData = this.createObjectForSending();

    window.emailjs.send('service_xrtom7j', 'template_16wbtra', formData, 'user_3QIXDooOoykxAufDOyptx')
      .then((result) => {
        console.log(result.text);
        this.setState({ status: 'finished' });
        console.log(this.state.status);
      }, (error) => {
        console.log(error.text);
        this.setState({ status: 'error' });
      });
    e.target.reset();
  };

  renderForm = () => {
    const {
      city,
      address,
      date,
      phone,
      quantity,
      price,
      pompa,
      cooler,
    } = this.state.form;

    return (
      <form onSubmit={this.handleSubmit} className="water-order__form form-water">
        <div className="form-water__group">
          <div className="form-water__input-wrapper form-water__input-wrapper--left">
            <label htmlFor="city" className="form-water__label">Город</label>
            <select id="city" name="city" onChange={this.handleChangeCity} value={city} className="form-water__input form-water__input--select" size="1" ref={this.cityRef}>
              <option value="karaganda">Караганда</option>
              <option value="temirtau">Темиртау</option>
              <option value="abay">Абай</option>
              <option value="saran">Сарань</option>
              <option value="shahtinsk">Шахтинск</option>
              <option value="shahan">Шахан</option>
              <option value="aktas">Актас</option>
            </select>
          </div>
          <div className="form-water__input-wrapper form-water__input-wrapper--right">
            <label htmlFor="address" className="form-water__label">Улица, дом</label>
            <input
              id="address"
              onChange={this.handleChangeAddress}
              value={address}
              type="text"
              name="address"
              className="form-water__input"
              placeholder="ул.Абая 1, кв.1"
              ref={this.addressRef}
            />
          </div>
        </div>
        <div className="form-water__group">
          <div className="form-water__input-wrapper form-water__input-wrapper--left">
            <label htmlFor="date" className="form-water__label">Дата поставки</label>
            <input
              id="date"
              onChange={this.handleChangeDate}
              value={date}
              type="date"
              name="date"
              className="form-water__input"
              ref={this.dateRef}
            />
          </div>
          <div className="form-water__input-wrapper form-water__input-wrapper--right">
            <label htmlFor="phone" className="form-water__label">Телефон</label>
            <ReactInputMask
              inputRef={this.setPhoneRef}
              id="phone"
              name="phone"
              className="form-water__input"
              mask="+7\(999)999-99-99"
              value={phone}
              onChange={this.handleChangePhone}
              alwaysShowMask={true}
            ></ReactInputMask>
          </div>
        </div>
        <div className="form-water__group form-water__group--quantity">
          <div className="form-water__input-wrapper form-water__input-wrapper--left">
            <p className="form-water__label">Кол-во шт.</p>
            <div className="form-water__button-quantity-wrapper">
              <button onClick={this.handleChangeQuantityMinus} className="form-water__button-quantity form-water__button-quantity--minus" type="button">
                <span className="visually-hidden">минус</span>
              </button>
              <p className="form-water__quantity">{quantity}</p>
              <button onClick={this.handleChangeQuantityPlus} className="form-water__button-quantity form-water__button-quantity--plus" type="button">
                <span className="visually-hidden">плюс</span>
              </button>
            </div>
          </div>
          <div className="form-water__input-wrapper form-water__input-wrapper--right">
            <p className="form-water__label">Доп.оборудование</p>
            <div className="form-water__input-wrapper form-water__input-wrapper--equipment">
              <div className="form-water__input-wrapper-group">
                <input
                  id="pompa"
                  type="checkbox"
                  name="pompa"
                  onChange={this.handleChangePompa}
                  className="form-water__input-equipment visually-hidden"
                  checked={pompa}
                  ref={this.pompaRef}
                />
                <label htmlFor="pompa" className="form-water__label-equipment">Помпа</label>
              </div>
              <div className="form-water__input-wrapper-group">
                <input
                  id="cooler"
                  type="checkbox"
                  name="cooler"
                  onChange={this.handleChangeCooler}
                  className="form-water__input-equipment visually-hidden"
                  checked={cooler}
                  ref={this.coolerRef}
                />
                <label htmlFor="cooler" className="form-water__label-equipment">Диспенсер</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-water__group form-water__group--total">
          <div className="form-water__total-wrapper">
            <p className="form-water__total">Итого:
              <span className="form-water__total-number">
                {price}
                {' '}
                {'тг.'}
              </span>
            </p>
          </div>
          <button
            type="submit"
            className="form-water__button btn"
            ref={this.buttonRef}
          >
            Оформить заказ
          </button>
        </div>
      </form>
    );
  };

  renderFeedback = () => {
    console.log('Render Feedback');
    return (
      <div className="water-order__feedback feedback-form">
        <h3 className="feedback-form__title">Спасибо! Заявка принята</h3>
        <p className="feedback-form__text">Наш менеджер свяжется с вами в&nbsp;ближайшее время и уточнит все&nbsp;детали доставки</p>
      </div>
    );
  };

  render() {
    const { status } = this.state;
    return (
      <>
        {status === 'filling' ? this.renderForm() : this.renderFeedback()}
      </>
    );
  }
}

ReactDOM.render(
  <Form />,
  document.querySelector('#form'),
);
