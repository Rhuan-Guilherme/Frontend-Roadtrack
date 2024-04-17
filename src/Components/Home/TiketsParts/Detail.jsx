import React from 'react';

const Detail = ({ tipo }) => {
  return (
    <>
      {tipo === 'chamado' && (
        <span className="bg-[#CECAFF] border border-roxo-300 rounded-md text-xs text-roxo-900 font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5">
          <span className="w-2 h-2 bg-roxo-300 rounded-full"></span>
          Chamado
        </span>
      )}

      {tipo === 'queda' && (
        <span className="bg-red-200 border border-red-600 rounded-md text-xs text-red-900 font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5">
          <span className="w-2 h-2 bg-red-600 rounded-full"></span>
          Queda
        </span>
      )}
      {tipo === 'reiteracao' && (
        <span className="bg-orange-200 border border-orange-600 rounded-md text-xs text-orange-900 font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5">
          <span className="w-2 h-2 bg-orange-600 rounded-full"></span>
          Reiteração
        </span>
      )}
      {tipo === 'trasnferencia' && (
        <span className="bg-cyan-100 border border-cyan-600 rounded-md text-xs text-cyan-900 font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5">
          <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
          Trasnferência
        </span>
      )}
    </>
  );
};

export default Detail;
