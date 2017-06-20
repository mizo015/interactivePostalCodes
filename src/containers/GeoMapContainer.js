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
				<div className="row">
					<div className="col-xs-12 col-sm-8">
						<GoogleMapContainer
							zoom={11} center={{lat: 59.95, lng: 30.33}}
						/>
					</div>
					<div className="col-xs-12 col-sm-2">
						{ 'CONTROLS WILL GO HERE...'}
					</div>
				</div>
			</div>
		)
	}
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators(LocationsActions, dispatch)
}

export default connect(
  null,
  mapDispatchToProps,
)(GeoMapContainer)

