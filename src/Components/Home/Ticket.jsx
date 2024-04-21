import React, { useContext } from 'react';
import Descricao from './TiketsParts/Descricao';
import { TikectesContext } from '../../contexts/TikectesContext';
import Detail from './TiketsParts/Detail';
import ModalEdit from '../Modal/ModalEdit';

const Ticket = ({ tiket }) => {
  const { deleteTicket, fechaTicket, reabreTicket, clipboard } =
    useContext(TikectesContext);
  const [showModal, setShowModal] = React.useState(false);

  const handleEditClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`flex flex-col gap-2 bg-white w-[18.1rem] h-auto p-2 rounded-md relative ${
        tiket.status === 'Fechado'
          ? 'border border-green-500 opacity-60'
          : 'border border-cinza-400'
      }`}
    >
      {tiket.status === 'Fechado' ? (
        <button
          onClick={() => reabreTicket(tiket.id)}
          className="w-6 h-6 rounded-md bg-green-400 absolute -top-2 -right-2 text-white hover:bg-red-600 hover:scale-110 transition-all"
        >
          <span
            data-v-32fc746a=""
            className="material-symbols-outlined text-base"
          >
            check
          </span>
        </button>
      ) : (
        <button
          onClick={() => deleteTicket(tiket.id)}
          className="w-6 h-6 rounded-md bg-cinza-300 absolute right-2"
        >
          <span
            data-v-32fc746a=""
            className="material-symbols-outlined text-base"
          >
            close
          </span>
        </button>
      )}

      <p className="text-xs font-semibold text-cinza-700">{tiket.created_at}</p>

      <div className="flex items-center gap-3">
        <p className="font-roboto">
          {tiket.nome.split(' ')[0]} - {tiket.ramal}
        </p>
        <Detail status={tiket.status} tipo={tiket.tipo} />
      </div>

      {tiket.area && (
        <p className="text-xs font-semibold text-cinza-900">{tiket.area}</p>
      )}

      <span className="h-[2px] bg-cinza-300"></span>

      <Descricao tiket={tiket} />
      {tiket.status === 'Aberto' && (
        <>
          <span className="h-[2px] bg-cinza-300"></span>

          <div className="bg-cinza-200 h-12 rounded-lg flex justify-center items-center gap-2 shadow">
            <button
              onClick={handleEditClick}
              className="bg-white py-1 px-3 rounded-lg font-poppins font-semibold text-cinza-900 shadow hover:bg-cinza-500"
            >
              Editar
            </button>
            <button
              onClick={() => clipboard(tiket, tiket.tipo)}
              className="bg-white py-1 px-3 rounded-lg font-poppins font-semibold text-cinza-900 shadow"
            >
              Copiar
            </button>
            <button
              onClick={() => fechaTicket(tiket.id)}
              className="bg-white py-1 px-3 rounded-lg font-poppins font-semibold text-cinza-900 shadow"
            >
              Concluir
            </button>
            {showModal && (
              <ModalEdit
                ticket={tiket}
                show={showModal}
                onClose={handleCloseModal}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Ticket;
