import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../IconButton'

import { markAsDone, markAsPeding, remove } from '../../main/actions/actionsCreators'


const TodoList = (props) => {
  const rendrRows = () => {
    const list = props.list || []
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          <IconButton
            style='success'
            icon='check'
            hide={todo.done}
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            style='warning'
            icon='undo'
            hide={!todo.done}
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            style='danger'
            icon='trash-o'
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ))
  }
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='tableActions'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {rendrRows()}
      </tbody>
    </table>
  )
}

function mapStateToProps(state) {
  return {
    list: state.todo.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleMarkAsDone(params) {
      const action = markAsDone(params)
      dispatch(action)
    },
    handleMarkAsPending(params) {
      const action = markAsPeding(params)
      dispatch(action)
    },
    handleRemove(params) {
      const action = remove(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)