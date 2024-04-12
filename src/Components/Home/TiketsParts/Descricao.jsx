import React from 'react';

const Descricao = ({ tiket }) => {
  return (
    <div className="flex flex-col gap-2 font-roboto">
      {tiket.tipo === 'chamado' && (
        <>
          <p>
            Prezados, o Sr(a). {tiket.nome.split(' ')[0]} entrou em contato{' '}
            {tiket.informacao}
          </p>
          <p>Nome: {tiket.nome}</p>
          <p>Login: {tiket.login}</p>
          <p>Ramal: {tiket.login}</p>
          <p>Local: {tiket.local}</p>
          <p>Patrimônio: {tiket.patrimonio}</p>
        </>
      )}
    </div>
  );
};

export default Descricao;
