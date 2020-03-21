import React from 'react'

function StatusMessage ({show, color, message}) {

  return(
    <div
      class={`alert alert-${color} alert-dismissible ${show} w-100`}
      style={{position: 'absolute', zIndex: 10, opacity: 0.9}}
      role="alert">
      {message}
    </div>
  )
}

export default StatusMessage;
