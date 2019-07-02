import React, { Component } from 'react';
import {connect} from 'react-redux';
import { createTask } from './actions';

class App extends Component{

  state = {
    taskName: ''
  }

  render (){
    
    const { board, createTask, Junio, Alves } = this.props;
    
    return (
      <div className="App">
        <h2>Vem pro react </h2>
        <input
          value={this.state.taskName}
          onChange={(event) => this.setState({ taskName: event.target.value })}
          placeholder="Informe uma task"
        >
        </input>
        <button
          onClick={ () => {
            console.log(this.props)
            Alves()
            // Junio(this.state.taskName)
            this.setState({ taskName: '' })
          }}
        > Add task 
        </button>
        <ul>
          {board.map(
            task => <li key={task}>{task}</li> 
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board,
  testeMapState: state.testeMapState
})

const mapDispatchToProps = (dispatch) =>({
  createTask: (task) => dispatch(createTask(task)),
  Junio: (task) => dispatch(createTask(task)),
  Alves: () => {(console.log('Teste'))}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
