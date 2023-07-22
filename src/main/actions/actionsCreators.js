import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export function changeDescription(params) {
  return {
    type: 'CHANGE_DESCRIPTION',
    payload: params.target.value
  }
}

export function search() {

  return (dispatch, getState) => {
    const description = getState().todo.description
    const search = description ? `&description__regex=/${description}/` : ''
    axios.get(`${URL}?sort=-createdAt${search}`)
      .then(resp => dispatch({ type: 'TODO_SEARCHED', payload: resp.data }))
  }
}

// Sem o middle multi
// export function search() {
//   const request = axios.post(URL, { description })
//   return {
//     type: 'TODO_ADDED',
//     payload: request
//   }
// }

// Sem o middle thunk
// export function addTodo(description) {
//   const request = axios.post(URL, { description })
//   return [{
//     type: 'TODO_ADDED',
//     payload: request
//   }, search()]
// }

// Com o middle promise, multi e thunk.
export function addTodo(description) {
  return (dispatch) => {
    axios.post(URL, { description })
      .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp.data }))
      .then(resp => dispatch(clear()))
      .then(resp => dispatch(search()))
  }
}

export function markAsDone(todo) {
  return (dispatch) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(resp => dispatch(search()))
  }
}

export function markAsPeding(todo) {
  return (dispatch) => {
    axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(resp => dispatch(search()))
  }
}

export function remove(todo) {
  return (dispatch) => {
    axios.delete(`${URL}/${todo._id}`)
      .then(resp => dispatch(search()))
  }
}

export function clear() {
  return [{
    type: 'TODO_CLEAR'
  }, search()]
}