import React from "react";

const Button = ({ className, text, color, onClick }) => {
  return (
    <>
      <button
        className={className}
        onClick={onClick}
        style={{ background: color }}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
