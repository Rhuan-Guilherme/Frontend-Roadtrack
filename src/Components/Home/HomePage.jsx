import React from 'react';
import { AnimeContext } from '../../contexts/AnimeContext';
import { Navigate } from 'react-router-dom';
import ButtonTicket from './ButtonTicket';
import { UserContext } from '../../contexts/UserContext';
import ChamadoForm from './Forms/ChamadoForm';
import QuedaForm from './Forms/QuedaForm';
import ReiteracaoForm from './Forms/ReiteracaoForm';
import TrasnferenciaForm from './Forms/TrasnferenciaForm';

const HomePage = () => {
  const { login } = React.useContext(UserContext);
  const { slideExpand } = React.useContext(AnimeContext);
  const [formSelect, setFormSelect] = React.useState('chamado');

  const handleFormSelect = (value) => {
    setFormSelect(value);
  };

  if (!login) return <Navigate to="/login" />;
  return (
    <main
      className={`w-full mt-10 flex flex-col items-center ${
        slideExpand ? 'ml-20 mr-48' : 'mx-[10%]'
      } transition-all duration-100`}
    >
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
    </main>
  );
};

export default HomePage;
