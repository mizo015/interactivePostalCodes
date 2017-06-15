import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import GoogleMapContainer from './GoogleMapContainer'
import * as LocationsActions from '../actions/locations'

class GeoMapContainer extends React.Component {
	componentDidMount() {
		console.log('GeoMapContainer DID MOUNT');
		this.props.requestLocations();	
	}

	render(){
		return (
			<div>
				<h1>Geo Map Container</h1>
				<GoogleMapContainer />
			</div>
		)
	}
}


// const mapStateToProps = createStructuredSelector({
//   locations: createSelector(
//     (state) => state.locations,
//     (counterState) => counterState
//   ),
// })

function mapDispatchToProps (dispatch) {
  return bindActionCreators(LocationsActions, dispatch)
}

export default connect(
  null,
  mapDispatchToProps,
)(GeoMapContainer)

