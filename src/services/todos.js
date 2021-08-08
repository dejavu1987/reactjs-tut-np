export default class TodosService {
  constructor(apiUri) {
    this.API_URI = apiUri;
  }

  setURI(uri) {
    this.API_URI = uri;
  }

  getTodos() {
    return fetch(this.API_URI).then(res => res.json());
  }

  updateTodo(todo) {
    return fetch(`${this.API_URI}/${todo.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }

  deleteTodo(todoId) {
    return fetch(`${this.API_URI}/${todoId}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }

  createTodo(todo) {
    return fetch(`${this.API_URI}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json());
  }
}
