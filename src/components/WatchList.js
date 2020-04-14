import React from 'react'
import { connect } from 'react-redux'
import WatchListItem from './WatchListItem'

function WatchList( { list, setRemoveMessage } ) {
	
	const emptyList = (
		<div className='mt-5 mb-5'>
			<div className="text-muted"> Your Watch List is empty.</div>
		</div>
	)
	
	const watchList = (
		<div className='mt-3 mb-3'>
			{ list.map( el => <WatchListItem key={ el.id } product={ el } setRemoveMessage={ setRemoveMessage }/> ) }
		</div>
	)
	
	return (
		!list.length ? emptyList : watchList
	)
}

const mapStateToProps = state => ({
	list: state.shop.watchList
})

export default connect( mapStateToProps )( WatchList )
