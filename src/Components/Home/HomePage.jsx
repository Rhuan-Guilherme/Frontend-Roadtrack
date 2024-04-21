import React from 'react';
import { AnimeContext } from '../../contexts/AnimeContext';
import { Navigate } from 'react-router-dom';
import ButtonTicket from './ButtonTicket';
import { UserContext } from '../../contexts/UserContext';
import ChamadoForm from './Forms/ChamadoForm';
import QuedaForm from './Forms/QuedaForm';
import ReiteracaoForm from './Forms/ReiteracaoForm';
import TrasnferenciaForm from './Forms/TrasnferenciaForm';
import { TikectesContext } from '../../contexts/TikectesContext';
import Ticket from './Ticket';

const HomePage = () => {
  const { login } = React.useContext(UserContext);
  const { slideExpand } = React.useContext(AnimeContext);
  const [formSelect, setFormSelect] = React.useState('chamado');
  const { tickets, copy } = React.useContext(TikectesContext);

  const handleFormSelect = (value) => {
    setFormSelect(value);
  };

  if (!login) return <Navigate to="/login" />;
  return (
    <main
      className={`w-full mt-10 flex mb-10 flex-col items-center ${
        slideExpand ? 'ml-20 mr-48' : 'mx-[10%]'
      } transition-all duration-100`}
    >
      {copy && (
        <p className="w-72 h-10 bg-cinza-300 flex items-center p-2 font-poppins text-cinzaEscuro-500 rounded-md shadow-md border border-cinza-500 font-semibold fixed right-2 z-10 transition-all duration-100 copy">
          Copiado com sucesso!
        </p>
      )}

      <div className="bg-cinza-100 border border-cinza-300 shadow-sm rounded-md p-1 flex gap-2 w-auto">
        <ButtonTicket
          onClick={() => handleFormSelect('chamado')}
          icon="description"
        >
          Chamado
        </ButtonTicket>
        <ButtonTicket
          onClick={() => handleFormSelect('reiteracao')}
          icon="notification_important"
        >
          Reiteração
        </ButtonTicket>
        <ButtonTicket
          onClick={() => handleFormSelect('trasnferencia')}
          icon="phone_callback"
        >
          Transferência
        </ButtonTicket>
        <ButtonTicket
          onClick={() => handleFormSelect('queda')}
          icon="phone_missed"
        >
          Queda de ligação
        </ButtonTicket>
      </div>

      <div className="bg-cinza-100 border w-3/5 border-cinza-300 shadow-sm rounded-md p-5 mt-10">
        {formSelect === 'chamado' && <ChamadoForm />}
        {formSelect === 'reiteracao' && <ReiteracaoForm />}
        {formSelect === 'trasnferencia' && <TrasnferenciaForm />}
        {formSelect === 'queda' && <QuedaForm />}
      </div>

      {tickets && (
        <section className="mt-10 bg-cinza-200 w-full p-3 flex flex-wrap gap-3 items-center justify-center rounded-lg">
          {tickets.map((tiket) => (
            <Ticket tiket={tiket} />
          ))}
        </section>
      )}
    </main>
  );
};

export default HomePage;
