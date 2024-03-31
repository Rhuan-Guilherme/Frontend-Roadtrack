'use client';
import React from 'react';
import { Modal, Table } from 'flowbite-react';
import { AnimeContext } from '../../contexts/AnimeContext';
import Button from '../Form/Button';

const VipsModal = () => {
  const { openModalVips, setOpenModalVips } = React.useContext(AnimeContext);
  return (
    <>
      <Modal show={openModalVips} onClose={() => setOpenModalVips(false)}>
        <Modal.Header>Lista de VIPS</Modal.Header>
        <Modal.Body>
          <div>
            <form className="flex gap-3">
              <input
                type="text"
                placeholder="Nome"
                className="border border-cinza-400 w-full text-base p-3 bg-cinza-300 rounded-lg transition-all
                        focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
                        hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
              />
              <input
                type="text"
                placeholder="Login"
                className="border border-cinza-400 w-full text-base p-3 bg-cinza-300 rounded-lg transition-all
                        focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
                        hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
              />
              <Button>Adicionar</Button>
            </form>

            <div className="overflow-x-auto mt-10">
              <Table hoverable>
                <Table.Head className="rounded-lg ">
                  <Table.HeadCell className="bg-cinza-300">Nome</Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-300">
                    Login
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-300">
                    Excluir
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-cinza-200">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                      Rhuan Guilherme
                    </Table.Cell>
                    <Table.Cell>rhuan.g.silva</Table.Cell>
                    <Table.Cell>
                      <button className="bg-red-600 p-2 text-white font-poppins rounded-lg">
                        Deletar
                      </button>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default VipsModal;
