import React from 'react'


function WatchList ({ list }) {

  if (!list.length) {
    return (
      <div className='mt-5 mb-5'>
        <div className="text-muted"> Your Watch List is empty.</div>
      </div>
    )
  }

  return (
    <div className='mt-3 mb-3'>

    </div>
  )
}

export default WatchList
