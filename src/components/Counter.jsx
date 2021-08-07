import { useState } from 'react';
import Button from './Botton';

const Counter = ({ name }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Hello {name}</h2>
      <p>Count: {count}</p>
      <Button className="text-4xl" onClick={() => setCount(count + 1)}>
        +
      </Button>
      <Button className="text-4xl" onClick={() => setCount(count - 1)}>
        -
      </Button>
    </div>
  );
};

export default Counter;
