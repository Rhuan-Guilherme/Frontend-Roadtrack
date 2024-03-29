import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="box-border rounded-lg bg-gradient-to-b from-roxo-300 to-roxo-500 text-cinza-100 px-3 py-3 min-w-32 font-medium
        
      "
    >
      {children}
    </button>
  );
};

export default Button;
