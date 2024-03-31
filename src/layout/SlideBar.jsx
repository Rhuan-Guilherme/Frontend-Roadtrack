import React, { useState } from 'react';
import Seta from '../assets/seta.svg?react';
import More from '../assets/more.svg?react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../contexts/AnimeContext';

const styleButtons =
  'hover:bg-roxo-300 hover:text-white hover:shadow-md block rounded-lg px-1 p-2 font-roboto font-medium transition-all duration-100 text-cinzaEscuro-500 flex gap-2';

const SlideBar = () => {
  const { data, login, userLogout } = React.useContext(UserContext);
  const { slideExpand, toggleSlideBar, activeModalVips, activeModalLinks } =
    React.useContext(AnimeContext);

  if (!login) return false;
  return (
    <div
      className={`relative h-screen bg-cinza-200 transition-all duration-300 border-r border-cinza-300 ${
        slideExpand ? 'w-1/6' : 'w-0 '
      }`}
    >
      <button
        className="absolute shadow-md w-6 h-14 bg-roxo-300 -right-6 top-10 rounded-r-lg text-white flex items-center justify-center"
        onClick={toggleSlideBar}
      >
        <Seta
          className={`${
            slideExpand ? 'rotate-180' : 'rotate-0'
          } transition-all duration-300`}
        />
      </button>

      <div className={`${slideExpand ? 'block' : 'hidden'}  px-3 pt-10`}>
        <div className="w-full h-14 rounded-md bg-white p-2">
          <div className="flex items-center h-full justify-between">
            <div className="flex gap-2">
              <div className="h-12 w-12 flex items-center justify-center bg-cinza-400 rounded-md"></div>
              <div className="flex flex-col font-roboto">
                <span className="font-medium text-cinzaEscuro-600">
                  {data.nome}
                </span>
                <span className="text-cinza-800">{data.email}</span>
              </div>
            </div>
            <div>
              <More className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col">
            <span className="text-cinza-900 font-medium text-sm">SETTINGS</span>
            <span className="w-full h-[1px] bg-cinza-500"></span>
          </div>
          <div>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">dark_mode</span>
              <span>Modo Escuro</span>
            </Link>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">settings</span>
              <span>Configurações</span>
            </Link>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">contact_support</span>
              <span>Suporte</span>
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-cinza-900 font-medium text-sm">
              MENU OPTIONS
            </span>
            <span className="w-full h-[1px] bg-cinza-500"></span>
          </div>

          <div>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">home</span>
              <span>Home</span>
            </Link>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">receipt_long</span>
              <span>Lista de chamados</span>
            </Link>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">table_rows</span>
              <span>Organograma</span>
            </Link>
            <Link onClick={activeModalVips} className={styleButtons}>
              <span className="material-symbols-outlined">grade</span>
              <span>Vips</span>
            </Link>
            <Link onClick={activeModalLinks} className={styleButtons}>
              <span className="material-symbols-outlined">share</span>
              <span>Links</span>
            </Link>
          </div>

          <div className="flex flex-col">
            <span className="text-cinza-900 font-medium text-sm">USER</span>
            <span className="w-full h-[1px] bg-cinza-500"></span>
          </div>

          <div>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">monitoring</span>
              <span>Desempenho</span>
            </Link>
            <Link onClick={userLogout} className={styleButtons}>
              <span className="material-symbols-outlined">logout</span>
              <span>Sair</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
