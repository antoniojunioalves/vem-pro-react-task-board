import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createTask} from './actions';

class App extends Component{
  render (){
    return (
      <div className="App">
        <h2>Vem pro react </h2>
        <input
           placeholder="Informar uma task"
        >
        </input>
        <button> Criar task </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  board: state.board
})

const mapDispatchToProps = (dispatch) =>({
  createTask: (taskName)
})
export default App;
