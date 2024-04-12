import React from 'react';
import InputsHome from '../InputsHome';
import Button from '../../Form/Button';
import Loader from '../../layout/Loader';
import { TikectesContext } from '../../../contexts/TikectesContext';

const TrasnferenciaForm = () => {
  const {
    postTikects,
    ramal,
    setNome,
    nome,
    setRamal,
    loading,
    destinatario,
    setDestinatario,
  } = React.useContext(TikectesContext);

  function handleClick(e) {
    e.preventDefault();
    postTikects('trasnferencia');
  }
  return (
    <form className="flex flex-col gap-5">
      <div className="flex gap-4 w-full">
        <InputsHome
          type="text"
          name="login"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        >
          Nome
        </InputsHome>
        <InputsHome
          type="text"
          name="login"
          value={destinatario}
          onChange={({ target }) => setDestinatario(target.value)}
        >
          Destinatário
        </InputsHome>
      </div>
      <div className="flex gap-4 w-full">
        <InputsHome
          type="text"
          name="login"
          value={ramal}
          onChange={({ target }) => setRamal(target.value)}
        >
          Ramal
        </InputsHome>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={handleClick}>Registrar</Button>
        {loading && <Loader />}
      </div>
    </form>
  );
};

export default TrasnferenciaForm;
