import React from 'react'
import { connect } from 'react-redux'
import IconButton from '../IconButton'

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
    description: state.todo.description,
    list: state.todo.list
  }
}

export default connect(mapStateToProps)(TodoList)