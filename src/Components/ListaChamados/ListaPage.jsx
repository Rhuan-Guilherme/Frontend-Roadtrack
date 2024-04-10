import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router';
import { AnimeContext } from '../../contexts/AnimeContext';
import Button from '../Form/Button';
import { GET_TIKECTS } from '../../api';

const ListaPage = () => {
  const { login, data } = React.useContext(UserContext);
  const { slideExpand } = React.useContext(AnimeContext);
  const [tickets, setTickets] = React.useState([]);
  const [id, setId] = React.useState(null);

  const returnTickets = React.useCallback(async () => {
    const { url, options } = GET_TIKECTS(id);
    const response = await fetch(url, options);
    const json = await response.json();
    setTickets(json);
  }, [id]);

  React.useEffect(() => {
    if (data) {
      setId(data.id || '');
    }
    returnTickets();
  }, [returnTickets, data]);

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
      {tickets && (
        <section className="flex flex-col gap-2 w-full mt-6 font-poppins mb-3">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="flex box-border ">
              <div className="flex w-3 rounded-l bg-roxo-400"></div>
              <div className="flex w-full bg-cinza-300 rounded-r box-border">
                <div className="font-medium p-3 border-r-2 border-cinza-500">
                  {`${ticket.nome} - ${ticket.ramal}`}
                </div>
                <div className="font-medium text-cinzaEscuro-600 p-3 border-r-2 border-cinza-500">
                  {ticket.created_at}
                </div>
                <div className="p-3 text-clip truncate w-96">
                  {ticket.informacao}...
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </main>
  );
};

export default ListaPage;
