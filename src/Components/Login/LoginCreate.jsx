import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../hooks/useForm';
import { CREATE_USER } from '../../api';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const LoginCreate = () => {
  const navigate = useNavigate();
  const nome = useForm();
  const email = useForm();
  const password = useForm();
  const [erro, setErro] = React.useState(false);
  const [message, setMessage] = React.useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (email.validate() && password.validate()) {
      const { url, options } = CREATE_USER({
        nome: nome.value,
        email: email.value,
        senha: password.value,
      });
      const response = await fetch(url, options);
      if (response.ok) {
        const json = await response.json();
        setErro(false);
        setMessage('Conta criada com sucesso!');
        setTimeout(() => {
          navigate('/login');
        }, 2500);
      } else {
        setMessage('E-mail ja cadastrado! Tente novamente.');
        setErro(true);
      }
    }
  }

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

      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {message && (
          <p
            className={`${
              erro ? 'text-[#f31]' : 'text-green-500'
            } text-[#f31] font-poppins font-medium text-sm mb-2`}
          >
            {message}
          </p>
        )}

        <Button>Cadastre-se</Button>
      </form>
    </section>
  );
};

export default LoginCreate;
