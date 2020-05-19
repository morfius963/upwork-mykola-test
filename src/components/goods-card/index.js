import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const VALUES = {
  MIN: 1,
  MAX: 999,
};

const GoodsCard = ({ id, avatar, name, count, price, changeCount, removeGood }) => {
  const [itemCount, setItemCount] = useState(count);
  const onItemCountChange = e => setItemCount(e.target.value);
  const increaseItemCount = () => setItemCount(itemCount + 1);
  const decreaseItemCount = () => setItemCount(itemCount - 1);
  const deleteGood = () => removeGood(id);

  useEffect(() => {
    changeCount(id, itemCount)
  }, [itemCount, changeCount, id]);

  return (
    <article key={id**2} className="goods-item">
      <div className="goods-item__image">
        <img src={avatar} width="80" alt="Good item" />
      </div>
      <div className="goods-item__info">
        <h3>{name}</h3>
        <p>$0.5/kg</p>
      </div>
      <div className="goods-item__number-input">
        <button
          onClick={decreaseItemCount}
          type="button"
          className="goods-item__number-btn"
          disabled={itemCount === VALUES.MIN}
        >
          &#x2212;
        </button>
        <input
          type="number"
          min="1"
          max="999"
          value={itemCount}
          onChange={onItemCountChange}
          readOnly
          />
        <button
          onClick={increaseItemCount}
          type="button"
          className="goods-item__number-btn"
          disabled={itemCount === VALUES.MAX}
        >
          &#43;
        </button>
      </div>
      <p className="goods-item__price">
        &#36;{price * itemCount}
      </p>
      <button onClick={deleteGood} type="button" className="goods-item__remove-btn" />
    </article>
  );
};

GoodsCard.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  changeCount: PropTypes.func.isRequired,
  removeGood: PropTypes.func.isRequired,
}

export default GoodsCard;
