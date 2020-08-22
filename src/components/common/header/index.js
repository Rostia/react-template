import React, { useState, createContext, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/common/button';
import Logotype from 'components/common/logotype';
import FormMovie from 'components/common/form/movie';
import styles from './header.module.scss';

export const SearchContext = createContext({ search: '', setSearch: () => { } });

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const Header = ({ addFilm }) => {
  const [open, setOpen] = useState(false);
  const inputSearch = useRef(undefined);
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
          <SearchContext.Consumer>
            {
              ({ setSearch }) => (
                <>
                  <input
                    type="text"
                    className={styles.searchInput}
                    onKeyUp={(event) => {
                      if (event.key === 'Enter') {
                        setSearch(event.target.value);
                      }
                    }}
                    ref={inputSearch}
                  />
                  <Button
                    type="button"
                    mode="active"
                    onClick={() => setSearch(inputSearch.current.value)}
                  >
                    Search
                  </Button>
                </>
              )
            }
          </SearchContext.Consumer>
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

SearchProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.func,
  ]).isRequired,
};

export default Header;
