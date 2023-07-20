import React, { Component } from 'react'
import PageHeader from '../components/PageHeader'
import TodoForm from '../components/TodoForm'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro'/>
        <TodoForm />
      </div>
    )
  }
}