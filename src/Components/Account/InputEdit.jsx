import React from 'react';

const InputEdit = ({
  children,
  value,
  type,
  setValue,
  estilo,
  edit,
  name,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{children}</label>
      <div className="flex items-center">
        <input
          type={type}
          name={name}
          id={name}
          value={value}
          {...props}
          onChange={({ target }) => setValue(target.value)}
          className={`border border-cinza-400 w-96 h-10 text-base p-3 rounded-lg transition-all
          focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF]
          hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100 shadow ${estilo}`}
        />
      </div>
    </div>
  );
};

export default InputEdit;
