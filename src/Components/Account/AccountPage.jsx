import React from 'react';
import { AnimeContext } from '../../contexts/AnimeContext';
import InputEdit from './InputEdit';
import { UserContext } from '../../contexts/UserContext';
import { ALTER_DADOS } from '../../api';
import { useNavigate } from 'react-router-dom';
import ModalConfirmation from './ModalConfirmation';
import { Navigate, Route, Routes } from 'react-router';

const AccountPage = () => {
  const { slideExpand } = React.useContext(AnimeContext);
  const { userLogout, login } = React.useContext(UserContext);
  const { data } = React.useContext(UserContext);
  const [edit, setEdit] = React.useState(false);
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [id, setId] = React.useState('');
  const [openModal, setOpenModal] = React.useState();
  const navigate = useNavigate();

  const alterDados = React.useCallback(
    async (e) => {
      e.preventDefault();
      const { url, options } = ALTER_DADOS({ id, nome, email });
      const response = await fetch(url, options);
      const json = await response.json();
      userLogout();
      navigate('/login');
    },
    [id, email, nome, navigate, userLogout],
  );

  React.useEffect(() => {
    if (data) {
      setNome(data.nome || '');
      setEmail(data.email || '');
      setId(data.id || '');
    }
  }, [data]);

  function editMode(e) {
    e.preventDefault();
    setEdit(true);
  }

  function openModalConfirm(e) {
    e.preventDefault();
    setOpenModal(true);
  }

  if (!login) return <Navigate to="/login" />;
  return (
    <section
      className={`w-full mt-10 ${
        slideExpand ? 'ml-20 mr-48' : 'mx-[10%]'
      } transition-all duration-100`}
    >
      <h1 className="text-2xl font-poppins font-semibold text-cinzaEscuro-600 border-b py-2">
        Configurações de conta
      </h1>

      <main className="mt-10 flex flex-col gap-3">
        <div className="w-28 h-28  bg-cinza-300 rounded-lg"></div>

        <form className="flex flex-col gap-4">
          {edit ? (
            <div className="flex flex-col gap-4">
              <InputEdit
                name="nome"
                value={nome}
                setValue={setNome}
                edit={edit}
              >
                Seu nome
              </InputEdit>
              <InputEdit
                name="email"
                value={email}
                setValue={setEmail}
                edit={edit}
              >
                E-mail
              </InputEdit>
            </div>
          ) : (
            <div className="flex flex-col gap-4 cursor-pointer">
              <InputEdit
                disabled
                value={nome}
                type="text"
                name="nome"
                setValue={setNome}
                edit={edit}
                estilo="opacity-50 cursor-not-allowed"
              >
                Seu nome
              </InputEdit>
              <InputEdit
                disabled
                value={email}
                type="text"
                name="email"
                setValue={setNome}
                edit={edit}
                estilo="opacity-50 cursor-not-allowed"
              >
                E-mail
              </InputEdit>
            </div>
          )}
          <div className="flex gap-8">
            <button
              onClick={editMode}
              className=" flex items-center justify-center gap-3 bg-roxo-300 h-10 w-44 rounded-md text-white font-roboto font-semibold"
            >
              <span className="material-symbols-outlined ">edit</span>
              EDITAR
            </button>
            <button
              onClick={openModalConfirm}
              type="submit"
              className=" flex items-center justify-center gap-3 bg-roxo-300 h-10 w-44 rounded-md text-white font-roboto font-semibold"
            >
              <span className="material-symbols-outlined ">check</span>
              SALVAR
            </button>
          </div>
        </form>

        <section className="mt-10">
          <h2 className="mb-2 text-xl font-roboto">Altear senha de acesso</h2>
          <form className="border flex items-end gap-3 justify-start p-5 rounded-md">
            <InputEdit type="password">Senha atual</InputEdit>
            <InputEdit type="password">Confirmar senhas</InputEdit>
            <button className=" flex items-center justify-center gap-3 bg-roxo-300 h-10 w-44 rounded-md text-white font-roboto font-semibold">
              SALVAR
            </button>
          </form>
        </section>

        <section className="mt-5 border p-5 rounded-md">
          <button className=" flex items-center justify-center gap-3 bg-red-500 h-10 w-44 rounded-md text-white font-roboto font-semibold">
            DESATIVAR CONTA
          </button>
          <p className="text-red-500 font-bold font-poppins mt-2">
            Cuidado! Ao desativar a sua conta, a mesma so será liberada apos
            autorização do administrador de seu sistema
          </p>
        </section>
      </main>
      <ModalConfirmation
        openModal={openModal}
        setOpenModal={setOpenModal}
        alterDados={alterDados}
      />
    </section>
  );
};

export default AccountPage;
