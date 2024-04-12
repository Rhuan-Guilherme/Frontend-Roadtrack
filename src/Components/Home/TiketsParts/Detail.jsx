import React from 'react';

const Detail = ({ ticket }) => {
  return (
    <span className="bg-[#CECAFF] border border-roxo-300 rounded-md text-xs text-roxo-900 font-roboto font-semibold flex justify-center items-center gap-2 px-1 h-5">
      <span className="w-2 h-2 bg-roxo-300 rounded-full"></span>
      Chamado
    </span>
  );
};

export default Detail;
