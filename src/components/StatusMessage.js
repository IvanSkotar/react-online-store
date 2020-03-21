import React from 'react'

function StatusMessage ({show, color, message}) {

  return(
    <div
      className={`alert alert-${color} alert-dismissible ${show} w-100 text-center`}
      style={{position: 'absolute', zIndex: 10, opacity: 0.9}}
      role="alert">
      {message}
    </div>
  )
}

export default StatusMessage;
