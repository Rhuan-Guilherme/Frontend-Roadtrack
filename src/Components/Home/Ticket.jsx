import React from 'react';
import Descricao from './TiketsParts/Descricao';

const Ticket = ({ tiket }) => {
  return (
    <div
      className={`flex flex-col gap-2 bg-cinza-100 w-[19rem] h-auto p-2 rounded-md ${
        tiket.vip === 'sim' ? 'border border-yellow-400' : 'border=none'
      } `}
    >
      <p className="text-xs font-semibold text-cinza-700">{tiket.created_at}</p>

      <div className="flex items-center gap-3">
        <p className="font-roboto">
          {tiket.nome.split(' ')[0]} - {tiket.ramal}
        </p>
        <span className="bg-[#CECAFF] border border-roxo-300 rounded-md text-xs text-roxo-900 font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5">
          <span className="w-2 h-2 bg-roxo-300 rounded-full"></span>
          Chamado
        </span>
      </div>

      <p className="text-xs font-semibold text-cinza-900">{tiket.area}</p>

      <span className="h-[2px] bg-cinza-300"></span>

      <Descricao tiket={tiket} />

      <span className="h-[2px] bg-cinza-300"></span>

      <div className="bg-cinza-200 h-12 rounded-lg flex justify-center items-center gap-3 shadow">
        <button className="bg-white py-1 px-3 rounded-lg font-poppins font-semibold text-cinza-900 shadow">
          Editar
        </button>
        <button className="bg-white py-1 px-3 rounded-lg font-poppins font-semibold text-cinza-900 shadow">
          Copiar
        </button>
        <button className="bg-white py-1 px-3 rounded-lg font-poppins font-semibold text-cinza-900 shadow">
          Concluir
        </button>
      </div>
    </div>
  );
};

export default Ticket;
