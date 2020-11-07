import React from 'react';
import PropTypes from 'prop-types';
import Logotype from 'components/common/logotype';
import styles from './footer.module.scss';
import hocCounter from './hocCounter';
import useTime from './useTime';

// PATTERN: {render props}
const Footer = ({
  render,
  counter,
  incrementCounter,
  decrementCounter
}) => {
  // PATTERN: {hooc}
  const time = useTime();

  return (
  <footer className={styles.footerCompanent}>
    <Logotype />
    <div>
      {render()}
    </div>
    <div>
      <button onClick={() => incrementCounter()}>+1</button>
      <span>{counter}</span>
      <button onClick={() => decrementCounter()}>-1</button>
    </div>
    <p>{time}</p>
  </footer>
);
  }

Footer.propTypes = {
  render: PropTypes.func,
};

Footer.defaultProps = {
  render: () => {},
};

// PATTERN: {HOC}
export default hocCounter(Footer);
