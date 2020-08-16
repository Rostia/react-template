import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({
  children,
  mode,
  className,
  ...otherProps
}) => (
  <button
    type="button"
    className={`
        ${styles.btn} 
        ${mode === 'default' && styles.default}
        ${mode === 'active' && styles.active}
        ${className}
      `}
    {...otherProps}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
  mode: PropTypes.oneOf(['default', 'active']),
  className: PropTypes.string,
};

Button.defaultProps = {
  mode: 'default',
  className: '',
};

export default Button;
