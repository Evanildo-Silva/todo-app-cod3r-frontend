import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, changeDescription, clear, search } from '../../main/actions/actionsCreators'
import Grid from '../Grid'
import IconButton from '../IconButton'

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() { // Carrega a os dados de search na inicialização
    this.props.handleSearch()
  }

  keyHandler(e) {
    if (e.key === 'Enter') {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd(this.props.description)
    } else if (e.key === 'Escape') {
      this.props.handleClear()
    }
  }
  render() {
    return (
      <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
          <input
            id='description'
            className='form-control'
            placeholder='Adicione uma tarefa'
            onChange={this.props.handleChange}
            onKeyUp={this.keyHandler}
            value={this.props.description}
          />
        </Grid>
        <Grid cols='12 3 2'>
          <IconButton style='primary' icon='plus' onClick={() => this.props.handleAdd(this.props.description)}></IconButton>
          <IconButton style='info' icon='search' onClick={this.props.handleSearch}></IconButton>
          <IconButton style='default' icon='close' onClick={this.props.handleClear}></IconButton>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    description: state.todo.description
  }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange(params) {
      const action = changeDescription(params)
      dispatch(action)
    },
    handleSearch() {
      const action = search()
      dispatch(action)
    },
    handleAdd(params) {
      const action = addTodo(params)
      dispatch(action)
    },
    handleClear(params) {
      const action = clear(params)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)