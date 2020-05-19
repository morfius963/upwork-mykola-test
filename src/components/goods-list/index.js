import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const GoodsList = ({ title, children }) => (
  <section className="goods-list">
    <div className="goods-list__title">
      {title}
    </div>

    {children}
  </section>
);

GoodsList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default GoodsList;
