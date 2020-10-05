import React from 'react';
import cn from 'classnames';
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
    className={cn(styles.btn, className, {
      [styles.default]: mode === 'default',
      [styles.active]: mode === 'active',
      [styles.outline]: mode === 'outline',
    })}
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
  mode: PropTypes.oneOf(['default', 'active', 'outline']),
  className: PropTypes.string,
};

Button.defaultProps = {
  mode: 'default',
  className: '',
};

export default Button;
