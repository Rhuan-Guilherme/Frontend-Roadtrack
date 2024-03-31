'use client';
import React from 'react';
import { Modal, Table } from 'flowbite-react';
import Button from '../Form/Button';
import { AnimeContext } from '../../contexts/AnimeContext';

const LinksModal = () => {
  const { openModalLinks, setOpenModalLinks } = React.useContext(AnimeContext);
  return (
    <>
      <Modal show={openModalLinks} onClose={() => setOpenModalLinks(false)}>
        <Modal.Header>Links de chamados</Modal.Header>
        <p className="px-5 py-2">
          Ao criar um link de chamado, vc pode criar e organizar chamados
          relacionados ao mesmo problema.
        </p>
        <Modal.Body>
          <div>
            <form className="flex gap-3">
              <input
                type="text"
                placeholder="N° do chamado"
                className="border border-cinza-400 w-full text-base p-3 bg-cinza-300 rounded-lg transition-all
                        focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
                        hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
              />
              <input
                type="text"
                placeholder="Informação"
                className="border border-cinza-400 w-full text-base p-3 bg-cinza-300 rounded-lg transition-all
                        focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
                        hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
              />
              <Button>Adicionar</Button>
            </form>

            <div className="overflow-x-auto mt-10">
              <Table hoverable>
                <Table.Head className="rounded-lg ">
                  <Table.HeadCell className="bg-cinza-300">
                    N° do chamado
                  </Table.HeadCell>
                  <Table.HeadCell className="bg-cinza-300">
                    Informação
                  </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  <Table.Row className="bg-cinza-200">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                      <a
                        href="https://jira.stf.jus.br/"
                        className="text-roxo-700"
                      >
                        SERVICEDESK-209876
                      </a>
                    </Table.Cell>
                    <Table.Cell>problema no STF Digital</Table.Cell>
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

export default LinksModal;
