import React, { useState } from 'react'


function Toast({showToast}) {
  const [show, setShow] = useState(false);

  return (
    <div className='row'>
      <div className='col'>
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Bootstrap</strong>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </div>
      <div className='col'>
        <button onClick={() => showToast(setShow)}>Show Toast</button>
      </div>
    </div>
  );
}

export default Toast
