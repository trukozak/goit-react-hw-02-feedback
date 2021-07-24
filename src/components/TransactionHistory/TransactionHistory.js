import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem/TransactionHistoryItem';

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <TransactionHistoryItem key={item.id} {...item} />
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};

export default TransactionHistory;
