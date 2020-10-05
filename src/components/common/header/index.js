import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/button';
import Logotype from 'components/common/logotype';
import FormMovie from 'components/common/form/movie';
import { useHistory } from "react-router";
import styles from './header.module.scss';

const Header = ({ addFilm }) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const history = useHistory();

  const goToSearchPage = (str) => history.push(`/search/${str}`);

  return (
    <section className={styles.headerComponent}>
      <header className={styles.headerContainer}>
        <Logotype />
        <Button type="button" onClick={() => setOpen(true)}>+ Add movie</Button>
        {open && <FormMovie setOpen={setOpen} onSubmit={addFilm} />}
      </header>
      <div className={styles.contentContainer}>
        <h1 className={styles.header}>Find Your Movie</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                goToSearchPage(search);
              }
            }}
            onChange={(({ target }) => setSearch(target?.value))}
            value={search}
          />
          <Button
            type="button"
            mode="active"
            onClick={() => goToSearchPage(search)}
          >
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {
  addFilm: PropTypes.func,
};

Header.defaultProps = {
  addFilm: () => { },
};

export default Header;
