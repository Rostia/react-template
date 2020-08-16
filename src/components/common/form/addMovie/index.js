import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/button';
import styles from './addMovie.module.scss';

const AddMovie = ({ setOpen }) => (
  <section className={styles.componentContainer} onClick={() => setOpen(false)}>
    <div className={styles.modal}>
      <h2 className={styles.heading}>Add movie</h2>
      <div className={styles.formControll}>
        <label className={styles.label} htmlFor="title">Title</label>
        <input className={styles.input} id="title" />
      </div>
      <div className={styles.formControll}>
        <label className={styles.label} htmlFor="releaseData">Release Date</label>
        <input className={styles.input} id="releaseData" />
      </div>
      <div className={styles.formControll}>
        <label className={styles.label} htmlFor="genre">Genre</label>
        <input className={styles.input} id="genre" />
      </div>
      <div className={styles.btnGroup}>
        <Button
          type="button"
          mode="outline"
          className={styles.btn}
        >
          Reset
        </Button>
        <Button
          type="button"
          mode="active"
        >
          Add
        </Button>
      </div>
      <button className={styles.close} type="button" onClick={() => setOpen(false)}>&times;</button>
    </div>
  </section>
);

AddMovie.propTypes = {
  setOpen: PropTypes.func,
};

AddMovie.defaultProps = {
  setOpen: () => {},
};

export default AddMovie;
