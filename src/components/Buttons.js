import React from 'react'

const Buttons = props => (
  <div>
    <button onClick= {props.onStart} className="btn btn-outline-warning mr-3">Iniciar</button>
    <button onClick= {props.onStop} className="btn btn-outline-danger">Detener</button>
  </div>
)

export default Buttons