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
          <p>Ramal: {tiket.ramal}</p>
          <p>Local: {tiket.local}</p>
          <p>Patrimônio: {tiket.patrimonio}</p>
        </>
      )}

      {tiket.tipo === 'queda' && (
        <>
          <p>
            Senhor(a) Senhor(a) não identificado entrou em contato com o
            helpdesk no ramal 3416 e interrompeu a ligação antes do atendimento
            inicial.
          </p>
          <p>Ramal: {tiket.ramal}</p>
        </>
      )}

      {tiket.tipo === 'trasnferencia' && (
        <>
          <p>
            Senhor(a) {tiket.nome} entrou em contato solicitando transferência
            de ligação para o(a) senhor(a) {tiket.destinatario}.
          </p>
          <p>Ramal: {tiket.ramal}</p>
        </>
      )}
      {tiket.tipo === 'reiteracao' && (
        <>
          <p>
            Senhor(a) {tiket.nome} entrou em contato requisitando a reiteração e
            brevidade no chamado{' '}
            <a href={`https://jira.stf.jus.br/browse/${tiket.chamado}`}>
              SERVICEDESK-{tiket.chamado}
            </a>
            .
          </p>
          <p>Login: {tiket.login}</p>
          <p>Ramal: {tiket.ramal}</p>
        </>
      )}
    </div>
  );
};

export default Descricao;
