import React from 'react';
import { AnimeContext } from '../../contexts/AnimeContext';
import { Navigate } from 'react-router-dom';
import ButtonTicket from './ButtonTicket';
import { UserContext } from '../../contexts/UserContext';

const HomePage = () => {
  const { login } = React.useContext(UserContext);
  const { slideExpand } = React.useContext(AnimeContext);

  if (!login) return <Navigate to="/login" />;
  return (
    <main
      className={`w-full mt-10 flex flex-col items-center ${
        slideExpand ? 'ml-20 mr-48' : 'mx-[10%]'
      } transition-all duration-100`}
    >
      <div className="bg-cinza-100 border border-cinza-300 shadow-sm rounded-md p-1 flex gap-2 w-auto">
        <ButtonTicket icon="description">Chamado</ButtonTicket>
        <ButtonTicket icon="notification_important">Reiteração</ButtonTicket>
        <ButtonTicket icon="phone_callback">Transferência</ButtonTicket>
        <ButtonTicket icon="phone_missed">Queda de ligação</ButtonTicket>
      </div>

      <div className="bg-cinza-100 border border-cinza-300 shadow-sm rounded-md p-1 flex gap-2 w-auto mt-10">
        teste
      </div>
    </main>
  );
};

export default HomePage;
