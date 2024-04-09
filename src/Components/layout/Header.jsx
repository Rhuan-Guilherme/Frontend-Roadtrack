import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [pesquisa, setPesquisa] = React.useState('');

  const { data, login, userLogout } = React.useContext(UserContext);

  if (!login) return false;
  return (
    <header className="flex p-2 justify-between md:px-10 lg:flex lg:px-[10%] items-center md:justify-items-start lg:justify-items-center bg-cinza-200 dark:bg-cinzaRoxo-800 w-full h-16 border-b border-cinza-300 dark:border-cinzaEscuro-500">
      <Link
        to="/"
        id="logo"
        className="font-bold text-2xl font-roboto text-cinzaEscuro-700 dark:text-cinza-100"
      >
        RoadTrack
      </Link>
      <nav className="hidden lg:flex gap-5 font-semibold font-poppins text-cinzaEscuro-500 dark:text-cinza-100">
        <Link to="/home">Home</Link>
        <Link to="/organograma">Organograma</Link>
        <Link to="/lista">Lista</Link>
      </nav>
      <div id="search" className="hidden md:flex items-center ">
        <input
          className="w-64 h-8 rounded-l-md border-none bg-cinza-400 dark:bg-cinza-900 shadow-sm p-2 placeholder:text-cinzaEscuro-500 dark:placeholder:text-cinza-200 dark:text-white"
          type="text"
          placeholder=" Pesquisa..."
          name="pesquisa"
          value={pesquisa}
          onChange={({ target }) => setPesquisa(target.value)}
        />
        <div className="bg-cinza-500 dark:bg-cinzaEscuro-500 rounded-r-md h-8 flex items-center justify-center p-2">
          <button className="material-symbols-outlined text-md text-cinzaEscuro-900 dark:text-cinza-200 ">
            search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
