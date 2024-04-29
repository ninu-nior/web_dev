import React from 'react'

export default function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.greenhandler}>Greet Parent</button>
      
    </div>
  )
}
