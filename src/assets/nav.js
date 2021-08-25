/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quote-props */

class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { status: 'closed' };
  }

  handleBurgerChange = () => {
    const { status } = this.state;
    this.setState({ status: status === 'closed' ? 'opened' : 'closed' });
  }

  getClassName = () => {
    const { status } = this.state;
    const classes = {
      opened: 'nav--open',
      closed: 'nav--close',
    };

    return `main-header__nav nav ${classes[status]}`;
  };

  render() {
    return (
      <nav className={this.getClassName()}>
        <button onClick={this.handleBurgerChange} className="nav__button">
          <span className="visually-hidden">Меню</span>
        </button>
        <ul className="main-header__nav-list nav-list">
          <li className="nav-list__item">
            <a href="#" className="nav-list__link">О компании</a>
          </li>
          <li className="nav-list__item">
            <a href="#" className="nav-list__link">Напитки</a>
          </li>
          <li className="nav-list__item">
            <a href="#" className="nav-list__link">Оборудование</a>
          </li>
          <li className="nav-list__item">
            <a href="#" className="nav-list__link">Контакты</a>
          </li>
        </ul>
      </nav>
    );
  }
}

ReactDOM.render(
  <Burger />,
  document.querySelector('#nav'),
);
