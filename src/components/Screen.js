import React from 'react'

const Screen = props => (
  <div className="box-container-time rounded col-8 offset-2 mb-3">
    <span className="box-time d-inline-block m-2 c1">{props.hours}</span>
    <span className="box-time d-inline-block m-2 c2">{props.minutes}</span>
    <span className="box-time d-inline-block m-2 c3">{props.seconds}</span>
    <span className="box-time d-inline-block m-2 c4">{props.milliseconds}</span>
  </div>
)

export default Screen