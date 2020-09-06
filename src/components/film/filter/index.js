import React from 'react';
import { connect } from 'react-redux';
import { setActiveGanre } from 'actions/ganre';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './filmFilter.module.scss';

const FilmFilter = ({
  filterList,
  activeGanre,
  setactiveGanre,
}) => (
  <ul className={styles.filmFilterContainer}>
    <li
      className={styles.filterItem}
    >
      <span
        className={cn(styles.link, {
          [styles.active]: activeGanre === undefined,
        })}
        onClick={() => setactiveGanre(undefined)}
        role="presentation"
      >
        All
      </span>
    </li>
    {filterList.map((filter) => (
      <li
        className={styles.filterItem}
        key={filter}
      >
        <span
          className={cn(styles.link, {
            [styles.active]: activeGanre === filter,
          })}
          onClick={() => setactiveGanre(filter)}
          role="presentation"
        >
          {filter}
        </span>
      </li>
    ))}
  </ul>
);

FilmFilter.propTypes = {
  filterList: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGanre: PropTypes.string,
  setactiveGanre: PropTypes.func.isRequired,
};

FilmFilter.defaultProps = {
  activeGanre: undefined,
};

const mapStateToProps = ({ ganre }) => ({
  filterList: ganre.list,
  activeGanre: ganre.active,
});

const mapDispatchToProps = (dispatch) => ({
  setactiveGanre: (ganre) => dispatch(setActiveGanre(ganre)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmFilter);
