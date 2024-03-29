import React from 'react';

const Input = ({ label, type, name, value, onChange, error, onBlur }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-base leading-4 pb-2 font-roboto"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="border border-cinza-400 w-full text-base p-3 bg-cinza-300 rounded-lg transition-all
          focus:outline-none focus:border-roxo-300 focus:shadow-[0_0_0_2px_#B8ACFF] focus:bg-cinza-100
          hover:outline-none hover:border-roxo-300 hover:shadow-[0_0_0_2px_#B8ACFF] hover:bg-cinza-100
        "
      />
      {error && (
        <p className="text-[#f31] font-poppins font-medium text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
