import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';

const LoginCreate = () => {
  return (
    <section>
      <div className="mb-20">
        <h1 className="text-5xl md:text-6xl font-roboto font-medium">
          Crie <br /> sua conta
        </h1>
        <div className="font-poppins pl-1">
          Já é membro?{' '}
          <Link to="/login" className="font-roboto font-medium text-roxo-600">
            Log in
          </Link>
        </div>
      </div>

      <form>
        <Input label="Nome" type="text" name="nome" />
        <Input label="E-mail" type="text" name="email" />
        <Input label="Senha" type="password" name="password" />
        <Button>Acessar</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
