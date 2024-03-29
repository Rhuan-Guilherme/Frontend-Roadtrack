import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../contexts/UserContext';

const LoginForm = () => {
  const email = useForm();
  const password = useForm();
  const { userLogin, error } = React.useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      userLogin(email.value, password.value);
    }
  }

  return (
    <section>
      <div className="mb-20">
        <h1 className="text-5xl md:text-6xl font-roboto font-medium">
          Entre em <br /> sua conta
        </h1>
        <div className="font-poppins pl-1">
          Ainda não tem cadastro?{' '}
          <Link
            to="/login/cadastro"
            className="font-roboto font-medium text-roxo-600"
          >
            Cadastre-se
          </Link>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {error && (
          <p className="text-[#f31] font-poppins font-medium text-sm mb-2">
            {error}
          </p>
        )}
        <Button>Acessar</Button>
      </form>
    </section>
  );
};

export default LoginForm;
