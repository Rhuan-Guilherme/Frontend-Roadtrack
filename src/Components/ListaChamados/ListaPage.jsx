import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router';
import { AnimeContext } from '../../contexts/AnimeContext';

const ListaPage = () => {
  const { login } = React.useContext(UserContext);
  const { slideExpand } = React.useContext(AnimeContext);

  // if (!login) return <Navigate to="/login" />;
  return (
    <main
      className={`w-full mt-10 ${
        slideExpand ? 'mx-14' : 'mx-[15%]'
      } transition-all duration-100`}
    >
      <h1 className="text-3xl font-poppins font-semibold">Lista de chamados</h1>
      <div className="mt-5 w-full h-14 bg-cinza-300 rounded-sm flex items-center p-3">
        <div>
          <select
            name=""
            id=""
            className="rounded-md p-2 w-32 focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF]"
          >
            <option disabled value="">
              Selecione...
            </option>
            <option value="">Chamados</option>
            <option value="">Reiteração</option>
            <option value="">Transferência</option>
            <option value="">Queda de ligação</option>
          </select>
        </div>
      </div>
      <section></section>
    </main>
  );
};

export default ListaPage;
