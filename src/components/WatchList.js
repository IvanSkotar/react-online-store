import React from 'react'
import { connect } from 'react-redux'
import WatchListItem from './WatchListItem'

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
      {list.map(el => <WatchListItem key={el.id} product={el}/>)}
    </div>
  )
}

const mapStateToProps = state => ({
  list: state.shop.watchList
})

export default connect(mapStateToProps)(WatchList)
