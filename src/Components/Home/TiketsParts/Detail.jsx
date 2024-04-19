import React from 'react';

const Detail = ({ status, tipo }) => {
  return (
    <>
      {tipo === 'chamado' && (
        <span
          className={`border ${
            status === 'Fechado'
              ? 'bg-cinza-300 border-cinza-600 text-cinzaEscuro-700'
              : 'bg-[#CECAFF] border-roxo-300 text-roxo-900'
          }   rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2 bg-roxo-300 ${
              status === 'Fechado' ? 'bg-cinzaEscuro-500' : 'bg-roxo-300'
            } rounded-full`}
          ></span>
          Chamado
        </span>
      )}

      {tipo === 'queda' && (
        <span
          className={` border ${
            status === 'Fechado'
              ? 'bg-cinza-300 border-cinza-600 text-cinzaEscuro-700'
              : 'bg-red-200 border-red-600 text-red-900'
          }  rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2  ${
              status === 'Fechado' ? 'bg-cinzaEscuro-500' : 'bg-red-600'
            } rounded-full`}
          ></span>
          Queda
        </span>
      )}
      {tipo === 'reiteracao' && (
        <span
          className={` border ${
            status === 'Fechado'
              ? 'bg-cinza-300 border-cinza-600 text-cinzaEscuro-700'
              : 'bg-orange-200 border-orange-600 text-orange-900'
          }  rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2 ${
              status === 'Fechado' ? 'bg-cinzaEscuro-500' : 'bg-orange-600'
            }   rounded-full`}
          ></span>
          Reiteração
        </span>
      )}
      {tipo === 'trasnferencia' && (
        <span
          className={` border ${
            status === 'Fechado'
              ? 'bg-cinza-300 border-cinza-600 text-cinzaEscuro-700'
              : 'bg-cyan-100 border-cyan-600 text-cyan-900'
          }  rounded-md text-xs  font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5`}
        >
          <span
            className={`w-2 h-2 ${
              status === 'Fechado' ? 'bg-cinzaEscuro-500' : 'bg-cyan-600'
            }  rounded-full`}
          ></span>
          Trasnferência
        </span>
      )}
    </>
  );
};

export default Detail;
