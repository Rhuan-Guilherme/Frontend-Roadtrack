import React from 'react';

export const AnimeContext = React.createContext();

export const AnimeStore = ({ children }) => {
  const [slideExpand, setSlideExpand] = React.useState(false);
  const [openModalVips, setOpenModalVips] = React.useState(false);
  const [openModalLinks, setOpenModalLinks] = React.useState(false);

  function toggleSlideBar() {
    setSlideExpand(!slideExpand);
  }

  function activeModalVips() {
    setOpenModalVips(!openModalVips);
  }

  function activeModalLinks() {
    setOpenModalLinks(!openModalLinks);
  }

  return (
    <AnimeContext.Provider
      value={{
        slideExpand,
        toggleSlideBar,
        openModalVips,
        activeModalVips,
        setOpenModalVips,
        openModalLinks,
        setOpenModalLinks,
        activeModalLinks,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
