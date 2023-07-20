import React, { Component } from 'react'
import PageHeader from '../components/PageHeader'
import TodoForm from '../components/TodoForm'

export default class Todo extends Component {
  // "Amarrando" o this ao Todo component
  constructor(props) {
    super(props)
    this.state = { description: '', list: [] }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ ...this.state, description: e.target.value })
  }
  handleAdd() {

  }

  render() {
    return (
      <div>
        <PageHeader name='Tarefas' small='Cadastro' />
        <TodoForm
          description={this.state.description}
          handleAdd={this.handleAdd}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}