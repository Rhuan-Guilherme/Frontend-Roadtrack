import React, { useState } from 'react';
import Seta from '../assets/seta.svg?react';
import More from '../assets/more.svg?react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import { AnimeContext } from '../contexts/AnimeContext';

const styleButtons =
  'hover:bg-roxo-300 hover:text-white hover:shadow-md block rounded-lg px-1 p-2 font-roboto font-medium transition-all duration-100 text-cinzaEscuro-500 flex justify-center md:justify-normal m-2 md:m-0 gap-2 sm:text-sm lg:text-base';

const SlideBar = () => {
  const { data, login, userLogout } = React.useContext(UserContext);
  const { slideExpand, toggleSlideBar, activeModalVips, activeModalLinks } =
    React.useContext(AnimeContext);

  if (!login) return false;
  return (
    <nav
      className={`mt-2 md:mt-0 rounded-md md:rounded-none relative flex h-full bg-cinza-200 transition-all duration-300 border-r md:border-cinza-300 ${
        slideExpand ? 'lg:w-1/6' : 'w-0 '
      }`}
    >
      <button
        className="hidden sm:flex absolute shadow-md w-6 h-14 bg-roxo-300 -right-6 top-10 rounded-r-lg text-white items-center justify-center"
        onClick={toggleSlideBar}
      >
        <Seta
          className={`${
            slideExpand ? 'rotate-180' : 'rotate-0'
          } transition-all duration-300`}
        />
      </button>
      <button
        className="flex sm:hidden absolute shadow-md w-6 h-8 bg-roxo-300 -right-6 top-10 rounded-r-lg text-white items-center justify-center"
        onClick={toggleSlideBar}
      >
        <Seta
          className={`${
            slideExpand ? 'rotate-180' : 'rotate-0'
          } transition-all duration-300`}
        />
      </button>

      <div className={`${slideExpand ? 'block' : 'hidden'}  px-3 pt-10`}>
        <div className="w-full h-12 sm:h-14 rounded-md bg-white p-2">
          <div className="flex items-center h-full justify-center sm:justify-between">
            <div className="flex gap-2">
              <div className="w-10 h-10 sm:h-12 sm:w-12 flex items-center justify-center bg-cinza-400 rounded-md"></div>
              <div className="hidden xl:flex flex-col font-roboto">
                <span className="font-medium text-cinzaEscuro-600">
                  {data.nome}
                </span>
                <span className="text-cinza-800 whitespace-nowrap">
                  Analista N1
                </span>
              </div>
            </div>
            <div className="hidden 2xl:inline">
              <More className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-10">
          <div className="flex flex-col">
            <span className="text-[10px] text-center sm:text-left text-cinza-900 font-medium sm:text-sm">
              SETTINGS
            </span>
            <span className="w-full h-[1px] bg-cinza-500"></span>
          </div>
          <div>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">dark_mode</span>
              <span className="hidden md:inline leading-6">Modo Escuro</span>
            </Link>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">settings</span>
              <span className="hidden md:inline leading-6">Configurações</span>
            </Link>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">contact_support</span>
              <span className="hidden md:inline leading-6">Suporte</span>
            </Link>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-center sm:text-left text-cinza-900 font-medium sm:text-sm">
              MENU OPTIONS
            </span>
            <span className="w-full h-[1px] bg-cinza-500"></span>
          </div>

          <div>
            <Link to="/" className={styleButtons}>
              <span className="material-symbols-outlined">home</span>
              <span className="hidden md:inline leading-6">Home</span>
            </Link>
            <Link to="/lista" className={styleButtons}>
              <span className="material-symbols-outlined">receipt_long</span>
              <span className="hidden md:inline leading-6">
                Lista de chamados
              </span>
            </Link>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">table_rows</span>
              <span className="hidden md:inline leading-6">Organograma</span>
            </Link>
            <Link onClick={activeModalVips} className={styleButtons}>
              <span className="material-symbols-outlined">grade</span>
              <span className="hidden md:inline leading-6">Vips</span>
            </Link>
            <Link onClick={activeModalLinks} className={styleButtons}>
              <span className="material-symbols-outlined">share</span>
              <span className="hidden md:inline leading-6">Links</span>
            </Link>
          </div>

          <div className="flex flex-col">
            <span className="text-[10px] text-center sm:text-left text-cinza-900 font-medium sm:text-sm">
              USER
            </span>
            <span className="w-full h-[1px] bg-cinza-500"></span>
          </div>

          <div>
            <Link className={styleButtons}>
              <span className="material-symbols-outlined">monitoring</span>
              <span className="hidden md:inline leading-6">Desempenho</span>
            </Link>
            <Link onClick={userLogout} className={styleButtons}>
              <span className="material-symbols-outlined">logout</span>
              <span className="hidden md:inline leading-6">Sair</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SlideBar;
