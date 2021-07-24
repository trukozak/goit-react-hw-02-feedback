import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tr>
    <td className={styles.historyItem}>{type}</td>
    <td className={styles.historyItem}>{amount}</td>
    <td className={styles.historyItem}>{currency}</td>
  </tr>
);

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
