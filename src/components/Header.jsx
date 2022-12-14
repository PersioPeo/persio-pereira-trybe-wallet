import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Cambio from './Cambio';
import Gastos from './Gastos';

class Header extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <Cambio />
        <Gastos />
        <p data-testid="email-field">{email}</p>

      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  email: state.user.email,
});

export default connect(mapStateToProps)(Header);
