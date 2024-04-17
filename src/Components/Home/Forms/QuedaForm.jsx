import React from 'react';
import InputsHome from '../InputsHome';
import Button from '../../Form/Button';
import Loader from '../../layout/Loader';
import { TikectesContext } from '../../../contexts/TikectesContext';

const QuedaForm = () => {
  const { postTikects, ramal, setRamal, loading } =
    React.useContext(TikectesContext);

  function handleClick(e) {
    e.preventDefault();
    postTikects('queda');
  }
  return (
    <form className="flex flex-col gap-5">
      <div className="flex gap-4 w-full">
        <InputsHome
          type="text"
          name="login"
          value={ramal}
          onChange={({ target }) => setRamal(target.value)}
        >
          Ramal da queda
        </InputsHome>
      </div>
      <div className="flex items-center gap-4">
        <Button onClick={handleClick}>Registrar</Button>
        {loading && <Loader />}
      </div>
    </form>
  );
};

export default QuedaForm;
