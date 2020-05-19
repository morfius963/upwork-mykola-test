import React from 'react';
import PropTypes from 'prop-types';

import GoodsList from '../goods-list';
import GoodsCard from '../goods-card';
import CartEmpty from '../cart-empty';
import withCart from '../../containers/cart';
import { getAllTypes } from '../../utils';

import './styles.scss';

const Cart = ({ allGoods, fullPrice, changeCount, removeGood, refreshData }) => (
  <article className="goods-cart">
    <button type="button" className="goods-cart__close-btn">
      <img src="images/close.svg" width="16" alt="Close cart" />
    </button>

    <h2 className="goods-cart__title">
      My cart
    </h2>

    <p className="goods-cart__desc">
      Your cart items with pickup time &#38; store info
    </p>

    <ul className="goods-cart__info">
      <li className="goods-cart__info-item">
        <div className="goods-cart__info-item-image">
          <img src="images/package.svg" width="53" alt="Delivery time" />
        </div>
        <div className="goods-cart__info-item-desc">
          <h3>11:30 AM - 12:00 PM</h3>
          <p>Friday, 24 April, 2020</p>
        </div>
      </li>
      <li className="goods-cart__info-item">
        <div className="goods-cart__info-item-image">
          <img src="images/location.svg" width="47" alt="Company address" />
        </div>
        <div className="goods-cart__info-item-desc">
          <h3>City Store</h3>
          <p>336A, North Town, CA</p>
        </div>
      </li>
    </ul>

    {allGoods.length === 0 ? (
      <CartEmpty refreshData={refreshData} />
    ) : (
      getAllTypes(allGoods).map((goodType, i) => {
        const goodsByType = allGoods.filter(({ type }) => type === goodType);

        return (
          <GoodsList
            key={`${goodType}-${i}`}
            title={goodType}
          >
            {goodsByType.map((props) => (
              <GoodsCard
                key={props.id}
                changeCount={changeCount}
                removeGood={removeGood}
                {...props} />
            ))}
          </GoodsList>
        )
      })
    )}

    {allGoods.length > 0 && (
      <div className="goods-cart__total">
        <button className="goods-cart__submit-btn">
          Checkout
        </button>
        <p className="goods-cart__total-price">
          Subtotal: &#36;{fullPrice}
        </p>
      </div>
    )}

  </article>
);

Cart.propTypes = {
  allGoods: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.oneOf(['Fruit','Candy','Vegetable']),
      avatar: PropTypes.string,
      name: PropTypes.string,
      count: PropTypes.number,
      price: PropTypes.number,
    })
  ).isRequired,
  fullPrice: PropTypes.number.isRequired,
  changeCount: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
  refreshData: PropTypes.func.isRequired,
};

export default withCart(Cart);
