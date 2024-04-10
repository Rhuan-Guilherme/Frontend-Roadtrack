import React from 'react';
import InputsHome from '../InputsHome';
import Button from '../../Form/Button';

const QuedaForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex gap-4 w-full">
        <InputsHome>Ramal da queda</InputsHome>
      </div>
      <div>
        <Button>Registrar</Button>
      </div>
    </form>
  );
};

export default QuedaForm;
