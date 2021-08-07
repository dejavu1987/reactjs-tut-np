import { useEffect, useState } from 'react';

import Button from './Botton';

const Todos = () => {
  const [todosList, setTodosList] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [backendUrl, setBackendUrl] = useState('http://localhost:4000/todos');

  useEffect(() => {
    fetch(backendUrl)
      .then(res => res.json())
      .then(todos => {
        setTodosList(todos);
      });
    return () => {
      console.log('cleaned up');
    };
  }, [backendUrl]);

  const updateTodo = todo => {
    fetch(`http://localhost:4000/todos/${todo.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(t => {
        console.log({ t });
      });
  };

  const createTodo = todo => {
    fetch(`http://localhost:4000/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
      .then(res => res.json())
      .then(t => {
        console.log({ t });
      });
  };

  return (
    <div>
      <h2 className="text-4xl border-bottom-1">Todos</h2>

      <input
        name="backendUrl"
        className="text-black"
        value={backendUrl}
        onChange={e => {
          setBackendUrl(e.target.value);
        }}
        type="text"
        placeholder="url?"
      />

      <div className="todo-form">
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log('submit');

            createTodo({
              title: newTodo,
              completed: false
            });
          }}
        >
          <input
            name="newTodo"
            className="text-black"
            value={newTodo}
            onChange={e => {
              setNewTodo(e.target.value);
            }}
            type="text"
            placeholder="What needs to be done?"
          />
          <Button type="submit">Add</Button>
        </form>
      </div>
      <ol className="list-decimal">
        {todosList.map(todo => (
          <li key={todo.id} className={todo.completed ? 'line-through' : ''}>
            {todo.title}{' '}
            <Button
              onClick={() => {
                updateTodo({ ...todo, completed: !todo.completed });
              }}
            >
              Done
            </Button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Todos;
