import React, { Component } from 'react';
import Header from './components/Header'
import Screen from './components/Screen'
import Buttons from './components/Buttons'
import { extraTimeParts } from './helpers/timers';
import { setInterval, clearInterval } from 'timers';
import './App.css';


class App extends Component {

  constructor(...props){
    super(...props)
    this.state = {
      isRunning : false,
      start : 0,
      current: 0
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
  }
  handleStart(){
    if(this.state.isRunning){
      // no hace nada
      return 
    } else {
      this.setState({
        isRunning: true,
        start: Date.now(),
        current: Date.now()
      })
      this._interval = setInterval(() => {
        this.setState({
          current: Date.now()
        })
      }, 100)
    }
  }
  handleStop(){
    if(this.state.isRunning){
      // detener el cronometro
      clearInterval(this._interval)
      this.setState({
        isRunning: false
      })    
    } else {
      // poner a cero el cronometro
      this.setState({
        start : 0,
        current : 0
      })  
    }
  }
  render() {
    const { start, current} = this.state,
    { 
      hours,
      minutes,
      seconds,
      milliseconds
    } = extraTimeParts(current - start)
    return (
      <div className="App">
        <Header />
        <Screen 
          hours = { hours }
          minutes = { minutes }
          seconds = { seconds }
          milliseconds = { milliseconds }
        />
        <Buttons 
          onStart = {this.handleStart}
          onStop = {this.handleStop}
        />
      </div>
    );
  }
}

export default App;
