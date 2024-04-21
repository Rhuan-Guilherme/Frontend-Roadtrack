import React from 'react';
import { Modal } from 'flowbite-react';
import Button from '../Form/Button';
import InputsHome from '../Home/InputsHome';
import { PUT_TICKETS } from '../../api';
import { TikectesContext } from '../../contexts/TikectesContext';
import Loader from '../layout/Loader';

const ModalEdit = ({ ticket, show, onClose }) => {
  console.log(ticket);
  const [nome, setNome] = React.useState(ticket.nome);
  const [login, setLogin] = React.useState(ticket.login);
  const [ramal, setRamal] = React.useState(ticket.ramal);
  const [patrimonio, setPatrimonio] = React.useState(ticket.patrimonio);
  const [informacao, setInformacao] = React.useState(ticket.informacao);
  const [local, setLocal] = React.useState(ticket.local);
  const [chamado, setChamado] = React.useState(ticket.chamado);
  const [destinatario, setDestinatario] = React.useState(ticket.destinatario);
  const [loading, setLoading] = React.useState(false);

  const { returnTickets } = React.useContext(TikectesContext);

  const handleAtualizacao = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { url, options } = PUT_TICKETS({
        ticket_id: ticket.id,
        nome,
        login,
        ramal,
        patrimonio,
        informacao,
        local,
        chamado,
        destinatario,
      });
      const response = await fetch(url, options);
      const json = await response.json();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      returnTickets();
      onClose();
    }
  };

  return (
    <>
      <Modal show={show} size="2xl" onClose={onClose}>
        <Modal.Header>Edição</Modal.Header>
        <Modal.Body>
          <form onSubmit={handleAtualizacao}>
            {ticket.tipo == 'chamado' && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="login"
                    value={login}
                    onChange={({ target }) => setLogin(target.value)}
                  >
                    Login
                  </InputsHome>
                  <InputsHome
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                  >
                    Nome
                  </InputsHome>
                </div>
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="ramal"
                    value={ramal}
                    onChange={({ target }) => setRamal(target.value)}
                  >
                    Ramal
                  </InputsHome>
                  <InputsHome
                    type="text"
                    name="patrimonio"
                    value={patrimonio}
                    onChange={({ target }) => setPatrimonio(target.value)}
                  >
                    Patrimônio
                  </InputsHome>
                </div>
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="informacao"
                    value={informacao}
                    onChange={({ target }) => setInformacao(target.value)}
                  >
                    Informação
                  </InputsHome>
                </div>
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="local"
                    value={local}
                    onChange={({ target }) => setLocal(target.value)}
                  >
                    Local
                  </InputsHome>
                </div>
              </div>
            )}

            {ticket.tipo == 'reiteracao' && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="login"
                    value={login}
                    onChange={({ target }) => setLogin(target.value)}
                  >
                    Login
                  </InputsHome>
                  <InputsHome
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                  >
                    Nome
                  </InputsHome>
                </div>
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="ramal"
                    value={ramal}
                    onChange={({ target }) => setRamal(target.value)}
                  >
                    Ramal
                  </InputsHome>
                  <InputsHome
                    type="text"
                    name="patrimonio"
                    value={chamado}
                    onChange={({ target }) => setChamado(target.value)}
                  >
                    Chamado
                  </InputsHome>
                </div>
              </div>
            )}
            {ticket.tipo == 'queda' && (
              <div className="flex gap-2">
                <InputsHome
                  type="text"
                  name="ramal"
                  value={ramal}
                  onChange={({ target }) => setRamal(target.value)}
                >
                  Ramal
                </InputsHome>
              </div>
            )}

            {ticket.tipo == 'trasnferencia' && (
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="nome"
                    value={nome}
                    onChange={({ target }) => setNome(target.value)}
                  >
                    Nome
                  </InputsHome>
                  <InputsHome
                    type="text"
                    name="destinatario"
                    value={destinatario}
                    onChange={({ target }) => setDestinatario(target.value)}
                  >
                    Destinatario
                  </InputsHome>
                </div>
                <div className="flex gap-2">
                  <InputsHome
                    type="text"
                    name="ramal"
                    value={ramal}
                    onChange={({ target }) => setRamal(target.value)}
                  >
                    Ramal
                  </InputsHome>
                </div>
              </div>
            )}

            <div className="mt-4">
              <div className="flex items-center gap-4">
                <Button>Atualizar</Button>
                {loading && <Loader />}
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalEdit;
