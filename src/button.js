import React from 'react';

const Button = ({ increment, decrement }) => {
  return (
    <div>
      <button onClick={increment}>Increment Me</button>
      <button onClick={decrement}>Decrement Me</button>
    </div>
  )
}

export default Button;