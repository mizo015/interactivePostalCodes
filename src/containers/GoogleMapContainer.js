import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import { GoogleMap } from '../components'

class GoogleMapContainer extends React.Component {
	static propTypes = {
	    selectedLocation: PropTypes.string.isRequired,
	    locations: PropTypes.array.isRequired,
  	}
	render(){
		return (
			<div>
				<h2>Google Map Container</h2>
				<GoogleMap {...this.props}/>
			</div>
		)
	}
}


const mapStateToProps = createStructuredSelector({
  locations: createSelector(
    (state) => state.locations || [],
    (state) => state //DON'T KNOW!!!
  ),
  selectedLocation: createSelector(
    (state) => state.selectedLocation || '',
    (state) => state //DON'T KNOW!!!
  ),

})

export default connect(mapStateToProps)(GoogleMapContainer);