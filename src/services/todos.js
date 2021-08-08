export default class TodosService {
  constructor(apiUri) {
    this.apiUri = apiUri;
  }

  setURI(uri) {
    this.apiUri = uri;
  }

  getTodos() {
    return fetch(this.apiUri).then(res => res.json());
  }

  updateTodo(todo) {
    return fetch(`${this.apiUri}/${todo.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }

  deleteTodo(todoId) {
    return fetch(`${this.apiUri}/${todoId}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  createTodo(todo) {
    return fetch(`${this.apiUri}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }
}
