import React from 'react';
import InputsHome from '../InputsHome';
import Button from '../../Form/Button';
import useForm from '../../../hooks/useForm';

const ChamadoForm = () => {
  const login = useForm(false);
  const nome = useForm(false);

  return (
    <form className="flex flex-col gap-5">
      <div className="flex gap-4 w-full">
        <InputsHome type="text" name="login" {...login}>
          Login
        </InputsHome>

        <InputsHome type="text" name="login" {...nome}>
          Nome
        </InputsHome>
      </div>
      <div className="flex gap-4 w-full">
        <InputsHome>Ramal</InputsHome>
        <InputsHome>Patrimônio</InputsHome>
      </div>
      <div className="flex gap-4 w-full">
        <InputsHome>Informação</InputsHome>
      </div>
      <div className="flex gap-4 w-full">
        <InputsHome>Local</InputsHome>
      </div>
      <div>
        <Button>Registrar</Button>
      </div>
    </form>
  );
};

export default ChamadoForm;
