import React from 'react';

const ButtonTicket = ({ onClick, icon, children }) => {
  return (
    <button
      onClick={onClick}
      className="bg-cinza-300 p-3 rounded-md font-roboto flex gap-1 hover:bg-roxo-300 hover:text-white transition-all duration-100 font-medium text-cinzaEscuro-600"
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="hidden lg:inline whitespace-pre">{children}</span>
    </button>
  );
};

export default ButtonTicket;
