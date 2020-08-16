import React, { useState, createContext, useRef } from 'react';
import Button from 'components/common/button';
import Logotype from 'components/common/logotype';
import AddMovie from 'components/common/form/addMovie';
import bg from './bg.jpg';
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

const Header = () => {
  const [open, setOpen] = useState(false);
  const inputSearch = useRef(undefined);
  return (
    <section className={styles.headerComponent}>
      <header className={styles.headerContainer}>
        <Logotype />
        <Button type="button" onClick={() => setOpen(true)}>+ Add movie</Button>
        {open && <AddMovie setOpen={setOpen} />}
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

export default Header;
