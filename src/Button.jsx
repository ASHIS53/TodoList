import React from 'react';

const Button = ({ variant = 'small', children, onClick }) => {
  const classes = `btn btn-${variant}`;

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
