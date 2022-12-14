import PropTypes from 'prop-types';
import React from 'react';

import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <section className={css.transactionSection}>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.catagories}>Type</th>
            <th className={css.catagories}>Amount</th>
            <th className={css.catagories}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.body}>
          {items.map(item => (
            <tr className={css.item} key={item.id}>
              <td className={css.itemValue}>{item.type}</td>
              <td className={css.itemValue}>{item.amount}</td>
              <td className={css.itemValue}>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};
