import classNames from 'classnames';
import { useEffect, useState } from 'react';

import Button from './Botton';
import TodosService from '../services/todos';

const DEFAULT_API_URL = 'http://localhost:4000/todos';

const todosService = new TodosService(DEFAULT_API_URL);

const Todos = () => {
  const [todosList, setTodosList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [backendUrl, setBackendUrl] = useState(DEFAULT_API_URL);

  useEffect(() => {
    todosService.setURI(backendUrl);
    todosService.getTodos().then(todos => {
      setTodosList(todos);
    });
  }, [backendUrl]);

  const createTodo = todo => {
    todosService.createTodo(todo).then(() => {
      setNewTodo('');
      setTodosList([...todosList, todo]);
    });
  };

  const updateTodo = todo => {
    todosService.updateTodo(todo).then(() => {
      setTodosList(todosList.map(t => (t.id === todo.id ? todo : t)));
    });
  };

  const deleteTodo = todoId => {
    todosService.deleteTodo(todoId).then(() => {
      setTodosList(todosList.filter(t => t.id !== todoId));
    });
  };

  return (
    <div className="container m-auto p-2">
      <fieldset className="border p-2 mb-5">
        <div className="form-field flex align-items-center">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="url" className="self-center">
            Backend URL
          </label>
          <input
            id="url"
            name="backendUrl"
            className="text-black border p-2 flex-1 ml-2"
            value={backendUrl}
            onChange={e => {
              setBackendUrl(e.target.value);
            }}
            type="text"
            placeholder="url?"
          />
        </div>
      </fieldset>

      <h2 className="text-4xl border-bottom-1">Todos</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          // console.log('submit');

          createTodo({
            title: newTodo,
            completed: false
          });
        }}
      >
        <div className="todo-form flex">
          <input
            name="newTodo"
            className="text-black border p-2 flex-1 ml-2"
            value={newTodo}
            onChange={e => {
              setNewTodo(e.target.value);
            }}
            type="text"
            placeholder="What needs to be done?"
          />
          <Button type="submit">Add</Button>
        </div>
      </form>
      <ol className="list-decimal  m-3 divide-y-2 divide-gray divide-solid">
        {todosList.map((todo, i) => (
          <li key={todo.id} className={classNames('flex', i % 2 ? 'bg-gray-200' : '')}>
            <span className={classNames(todo.completed ? 'line-through' : '', 'pl-2 flex-1 self-center')}>
              {todo.title}
            </span>
            <Button
              onClick={() => {
                updateTodo({ ...todo, completed: !todo.completed });
              }}
            >
              {todo.completed ? '❌' : '✔'}
            </Button>
            <button
              type="button"
              className="ml-2 border-red-400 border px-2 rounded-full"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              🗑
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};
export default Todos;
