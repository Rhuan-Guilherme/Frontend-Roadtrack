import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router';
import { AnimeContext } from '../../contexts/AnimeContext';
import Button from '../Form/Button';

const ListaPage = () => {
  const { login } = React.useContext(UserContext);
  const { slideExpand } = React.useContext(AnimeContext);

  if (!login) return <Navigate to="/login" />;
  return (
    <main
      className={`w-full mt-10 ${
        slideExpand ? 'ml-20 mr-48' : 'mx-[10%]'
      } transition-all duration-100`}
    >
      <h1 className="text-3xl font-poppins font-semibold">Lista de chamados</h1>
      <div className="mt-5 w-full h-14 rounded-sm flex items-center py-3">
        <form className="flex gap-3">
          <select
            id="default"
            className="bg-cinza-200 border border-cinza-400 text-cinzaEscuro-700 text-sm rounded-lg focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100 hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
          >
            <option selected>Chamados</option>
            <option value="US">Reiteração</option>
            <option value="CA">Trasnferência</option>
            <option value="FR">Queda de ligação</option>
          </select>
          <select
            id="default"
            className="bg-cinza-200 border border-cinza-400 text-cinzaEscuro-700 text-sm rounded-lg focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100 hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
          >
            <option selected>Total</option>
            <option value="US">Abertos</option>
            <option value="CA">Fechados</option>
          </select>
          <input
            type="text"
            placeholder="Pesquisa..."
            className='border border-cinza-300 w-full text-base p-3 bg-cinza-200 rounded-lg transition-all
          focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
          hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100
        "'
          />
          <Button>PESQUISAR</Button>
        </form>
      </div>
      <section className="flex w-full mt-6 font-poppins">
        <div className="flex bg-roxo-600 w-3 rounded-l"></div>
        <div className="flex w-full bg-cinza-300 rounded-r">
          <div className="font-medium p-3 border-r-2 border-cinza-500">
            Rhuan - 1546
          </div>
          <div className="font-medium text-cinzaEscuro-600 p-3 border-r-2 border-cinza-500">
            12/03/2024 às 21:25
          </div>
          <div className="p-3">
            solicitando o fornecimento de uma máquina para...
          </div>
        </div>
      </section>
    </main>
  );
};

export default ListaPage;
