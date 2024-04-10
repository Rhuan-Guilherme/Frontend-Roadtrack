import React from 'react';
import InputsHome from '../InputsHome';
import Button from '../../Form/Button';

const ReiteracaoForm = () => {
  return (
    <form className="flex flex-col gap-5">
      <div className="flex gap-4 w-full">
        <InputsHome>Login</InputsHome>
        <InputsHome>Nome</InputsHome>
      </div>
      <div className="flex gap-4 w-full">
        <InputsHome>N° do chamado</InputsHome>
        <InputsHome>Ramal</InputsHome>
      </div>
      <div>
        <Button>Registrar</Button>
      </div>
    </form>
  );
};

export default ReiteracaoForm;
