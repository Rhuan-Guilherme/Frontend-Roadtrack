import React from 'react';
import InputsHome from '../InputsHome';
import Button from '../../Form/Button';
import { Tooltip } from 'flowbite-react';
import useUsers from '../../../hooks/useUsers';
import { POST_TICKETS } from '../../../api';
import { UserContext } from '../../../contexts/UserContext';
import { TikectesContext } from '../../../contexts/TikectesContext';

const ChamadoForm = () => {
  const { data } = React.useContext(UserContext);
  const { returnTickets, tickets } = React.useContext(TikectesContext);
  const { users, setUsers, returnUsers } = useUsers();
  const [login, setLogin] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [vip, setVip] = React.useState(false);
  const [area, setArea] = React.useState('');
  const [ramal, setRamal] = React.useState('');
  const [patrimonio, setPatrimonio] = React.useState('');
  const [informacao, setInformacao] = React.useState('');
  const [local, setLocal] = React.useState('');
  const [cargo, setCargo] = React.useState('');

  async function postTikects(tipoChamado) {
    const now = new Date();
    const dia = now.getDate();
    const mes = now.getMonth() + 1;
    const ano = now.getFullYear();
    const hora = now.getHours();
    const minuto = now.getMinutes();
    const minutoFormatado = minuto < 10 ? `0${minuto}` : minuto;

    const { url, options } = POST_TICKETS({
      user_id: data.id,
      criador: data.nome,
      login,
      nome,
      cargo,
      area,
      ramal,
      patrimonio,
      informacao,
      local,
      created_at: `${dia}/${mes}/${ano} às ${hora}:${minutoFormatado}`,
      tipo: tipoChamado,
      vip: vip ? 'sim' : 'nao',
    });
    const response = await fetch(url, options);
    const json = await response.json();
    setLogin('');
    setNome('');
    setArea('');
    setCargo('');
    setRamal('');
    setPatrimonio('');
    setInformacao('');
    setLocal('');
    setVip('');
    returnTickets();
  }

  function handleClick(e) {
    e.preventDefault();
    postTikects('chamado');
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
    <>
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
            <label htmlFor="login">Login</label>
            <InputsHome
              type="text"
              name="login"
              value={login}
              onChange={handleLogin}
            />
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
            name="ramal"
            value={ramal}
            onChange={({ target }) => setRamal(target.value)}
          >
            Ramal
          </InputsHome>
          <InputsHome
            type="text"
            name="patrimonio"
            value={patrimonio}
            onChange={({ target }) => setPatrimonio(target.value)}
          >
            Patrimônio
          </InputsHome>
        </div>
        <div className="flex gap-4 w-full">
          <InputsHome
            type="text"
            name="informacao"
            value={informacao}
            onChange={({ target }) => setInformacao(target.value)}
          >
            Informação
          </InputsHome>
        </div>
        <div className="flex gap-4 w-full">
          <InputsHome
            type="text"
            name="informacao"
            value={local}
            onChange={({ target }) => setLocal(target.value)}
          >
            Local
          </InputsHome>
        </div>
        <div>
          <Button onClick={handleClick}>Registrar</Button>
        </div>
      </form>
    </>
  );
};

export default ChamadoForm;
