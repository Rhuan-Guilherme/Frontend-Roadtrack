'use client';
import React from 'react';
import { Modal, Table } from 'flowbite-react';
import { AnimeContext } from '../../contexts/AnimeContext';
import Button from '../Form/Button';
import useUsers from '../../hooks/useUsers';
import Loader from '../layout/Loader';

const VipsModal = () => {
  const { openModalVips, setOpenModalVips } = React.useContext(AnimeContext);
  const [modalSize] = React.useState('5xl');
  const {
    vip,
    value,
    setValue,
    users,
    setUsers,
    returnUsers,
    deleteVip,
    addVips,
    loading,
  } = useUsers();

  const clickUser = (targer) => {
    const value = targer.innerText;
    setValue(value);
    setUsers(null);
    console.log(users);
  };

  function onChange({ target }) {
    setValue(target.value);
    if (value.length > 2) {
      returnUsers(value);
    } else {
      setUsers(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addVips(value);
    setValue('');
  }

  return (
    <>
      <Modal
        show={openModalVips}
        size={modalSize}
        onClose={() => setOpenModalVips(false)}
      >
        <Modal.Header>Lista de VIPS</Modal.Header>
        <Modal.Body>
          <div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className=" w-3/6 relative">
                <input
                  value={value}
                  onChange={onChange}
                  type="text"
                  placeholder="Login"
                  className="border border-cinza-400 w-full text-base p-3 bg-cinza-300 rounded-lg transition-all
                          focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
                          hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
                />
                {users && (
                  <div className="w-full bg-cinza-400 max-h-56 overflow-x-auto z-10 rounded-md mt-1 absolute flex flex-col gap-1 shadow-xl border">
                    {users.map((user) => (
                      <div
                        key={user.id}
                        onClick={({ target }) => clickUser(target)}
                        className="bg-cinza-600 rounded-md p-2 cursor-pointer"
                      >
                        {user.login} {user.vip == 'sim' && <span> - VIP</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Button>Adicionar</Button>
              {loading && (
                <div className="flex items-center justify-center ml-2">
                  <Loader />
                </div>
              )}
            </form>

            <div className="overflow-x-auto mt-10">
              <Table hoverable>
                <Table.Head>
                  <Table.HeadCell className="bg-cinza-300">Nome</Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-300">
                    Login
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-300">
                    Area demandante
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-300">
                    Excluir
                  </Table.HeadCell>
                </Table.Head>
                {vip &&
                  vip.map((item) => (
                    <Table.Body key={item.id} className="divide-y">
                      <Table.Row className="bg-cinza-200 border-b border-cinza-700">
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                          {item.Name}
                        </Table.Cell>
                        <Table.Cell>{item.login}</Table.Cell>
                        <Table.Cell>{item.area}</Table.Cell>
                        <Table.Cell>
                          <button
                            onDoubleClick={() => deleteVip(item.id)}
                            className="bg-red-600 p-2 text-white font-poppins rounded-lg"
                          >
                            Deletar
                          </button>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  ))}
              </Table>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VipsModal;
