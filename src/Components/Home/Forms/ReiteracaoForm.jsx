import React from 'react';
import InputsHome from '../InputsHome';
import Button from '../../Form/Button';
import Loader from '../../layout/Loader';
import useUsers from '../../../hooks/useUsers';
import { Tooltip } from 'flowbite-react';
import { TikectesContext } from '../../../contexts/TikectesContext';

const ReiteracaoForm = () => {
  const {
    postTikects,
    login,
    setLogin,
    nome,
    setNome,
    ramal,
    setRamal,
    loading,
    setArea,
    setCargo,
    setVip,
    cargo,
    vip,
    area,
    chamado,
    setChamado,
  } = React.useContext(TikectesContext);
  const { users, setUsers, returnUsers } = useUsers();

  function handleClick(e) {
    e.preventDefault();
    postTikects('reiteracao');
  }

  const clickUser = (targer) => {
    const value = targer.innerText;
    setLogin(value);
    const returnName = users.map((user) => {
      if (user.login === value) {
        setNome(user.name);
        setArea(user.area);
        setCargo(user.cargo);
        if (user.vip == 'sim') {
          setVip(true);
        }
      }
    });
    returnName;
    setUsers(null);
  };

  function handleLogin({ target }) {
    const inputValue = target.value;
    setLogin(inputValue);
    if (inputValue.length >= 2) {
      returnUsers(inputValue);
    } else {
      setVip(false);
      setUsers('');
      setNome('');
      setCargo('');
    }
  }
  return (
    <form className="flex flex-col gap-5">
      <div className="flex gap-4 w-full relative">
        {cargo && (
          <div className="w-32 h-5 absolute bg-roxo-300 right-0 top-0 text-white text-center text-sm rounded-md font-semibold">
            {cargo}
          </div>
        )}
        {vip && (
          <div className="w-7 h-5 absolute bg-yellow-400 right-[8.2rem] top-0 text-white text-center text-sm rounded-md font-semibold flex items-center justify-center">
            <Tooltip content={area}>
              <span className="material-symbols-outlined text-base leading-5">
                star
              </span>
            </Tooltip>
          </div>
        )}
        <div className="flex flex-col gap-1 w-full relative -top-[3px]">
          <InputsHome
            type="text"
            name="login"
            value={login}
            onChange={handleLogin}
          >
            Login
          </InputsHome>
          {users && users.length > 0 && (
            <div className="w-full bg-cinza-200 max-h-96 border border-cinza-400 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl top-[4.5rem] ">
              {users.map((user) => (
                <div
                  key={user.id}
                  onClick={({ target }) => clickUser(target)}
                  className="border-b border-cinza-400 p-2 cursor-pointer flex items-center gap-4 indent-px"
                >
                  <span>{user.login}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <InputsHome
          type="text"
          name="login"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        >
          Nome
        </InputsHome>
      </div>
      <div className="flex gap-4 w-full">
        <InputsHome
          type="text"
          name="chamado"
          value={chamado}
          onChange={({ target }) => setChamado(target.value)}
        >
          N° do chamado
        </InputsHome>
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

export default ReiteracaoForm;
