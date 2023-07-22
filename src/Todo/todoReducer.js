const INIT_STATE = {
  description: '',
  list: []
}

export default function (state = INIT_STATE, action) {
  switch (action.type) {
    case 'CHANGE_DESCRIPTION':
      return {
        ...state,
        description: action.payload
      }
    case 'TODO_SEARCHED':
      return {
        ...state,
        list: action.payload
      }
    case 'TODO_CLEAR':
      return {
        ...state,
        description: ''
      }

    default:
      return state
  }
}