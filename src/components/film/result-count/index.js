import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResultCount.module.scss';

const ResultCount = ({ count }) => (
  <p className={styles.result}>
    <span>{count}</span>
    {' '}
    movies count
  </p>
);

ResultCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ResultCount;
