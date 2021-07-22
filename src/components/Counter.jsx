import { useState } from 'react';

const Counter = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
