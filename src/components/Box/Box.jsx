import React from 'react';
import './Box.css';

const Box = ({ value, id, onClick }) => {
  return (
    <button key={id} className={`box ${value === 'X' ? 'x' : 'o'}`} onClick={() => onClick(id)}>
      {value}
    </button>
  );
}

export default Box;