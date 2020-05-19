import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CartEmpty = ({ refreshData }) => (
  <section className="cart-empty">
    <h3 className="cart-empty__title">
      Your cart is empty. Click the button below to get new data
    </h3>
    <button onClick={refreshData} type="button" className="cart-empty__refresh-btn">
      Refresh
    </button>
  </section>
);

CartEmpty.propTypes = {
  refreshData: PropTypes.func.isRequired,
};

export default CartEmpty;
