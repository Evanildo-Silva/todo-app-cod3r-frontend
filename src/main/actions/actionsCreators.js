import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export function changeDescription(params) {
  return {
    type: 'CHANGE_DESCRIPTION',
    payload: params.target.value
  }
}

export function search() {
  const request = axios.get(`${URL}?sort=-createdAt`)
  return {
    type: 'TODO_SEARCHED',
    payload: request
  }
}