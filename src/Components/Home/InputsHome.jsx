import React from 'react';

const InputsHome = ({ children, name, type, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={name} className=" text-cinza-900 font-semibold">
        {children}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="border border-cinza-400 w-full h-10 text-base p-3 bg-cinza-300 rounded-lg transition-all
          focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
          hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100"
      />
    </div>
  );
};

export default InputsHome;
