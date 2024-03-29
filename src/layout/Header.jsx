import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const [pesquisa, setPesquisa] = React.useState(null);

  const { data, login, userLogout } = React.useContext(UserContext);

  if (!login) return false;
  return (
    <header className="flex p-2 justify-between md:px-10 lg:grid lg:grid-cols-3 items-center md:justify-items-start lg:justify-items-center bg-cinza-200 w-full h-16  border-b border-cinza-300">
      <div
        id="logo"
        className="font-bold text-2xl font-roboto text-cinzaEscuro-700"
      >
        {/* <button onClick={userLogout}>logf</button> */}
        RoadTrack
      </div>
      <nav className="hidden lg:flex gap-5 font-semibold font-poppins text-cinzaEscuro-500">
        <Link to="/home">Home</Link>
        <Link to="/organograma">Organograma</Link>
        <Link to="/lista">Lista</Link>
      </nav>
      <div id="search" className="hidden md:flex items-center ">
        <input
          className="w-64 h-8 rounded-l-md bg-cinza-400 shadow-sm p-2 placeholder:text-cinzaEscuro-500 "
          type="text"
          placeholder=" Pesquisa..."
          name="pesquisa"
          value={pesquisa}
          onChange={({ target }) => setPesquisa(target.value)}
        />
        <div className="bg-cinza-500 rounded-r-md h-8 flex items-center justify-center p-2">
          <button className="material-symbols-outlined text-md text-cinzaEscuro-900 ">
            search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
