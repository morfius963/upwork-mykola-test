import React from 'react';
import { connect } from 'react-redux';
import { changeCount, removeGood, refreshData } from '../../redux/goods/actions';
import { getFullPrice } from '../../utils';

const withCart = (Component) => {
  const CartContainer = (props) => (
    <Component
      {...props}
    />
  );

  const mapStateToProps = ({ goodsReducer }) => ({
    allGoods: goodsReducer.goods,
    fullPrice: getFullPrice(goodsReducer.goods),
  });

  const mapDispatchToProps = {
    changeCount,
    removeGood,
    refreshData,
  };

  return connect(mapStateToProps, mapDispatchToProps)(CartContainer);
}

export default withCart;
