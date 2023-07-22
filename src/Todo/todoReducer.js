const INIT_STATE = {
  description: 'Ler livros',
  list: [{
    _id: 1,
    description: 'Pagar cartão',
    done: true
  }, {
    _id: 2,
    description: 'Pagar telefone',
    done: false
  }, {
    _id: 3,
    description: 'Médico',
    done: false
  }]
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

    default:
      return state
  }
}