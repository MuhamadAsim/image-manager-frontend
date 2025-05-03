import React from 'react';

// Custom Button Component using Tailwind CSS
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-gray-900 font-semibold bg-white rounded-md hover:px-5  hover:bg-gray-100 transition-colors duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
