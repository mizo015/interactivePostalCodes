import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { createStructuredSelector, createSelector } from 'reselect'
import { GoogleMap } from '../components'
//import ScriptjsLoader from 'react-google-maps/lib/async/ScriptjsLoader';

class GoogleMapContainer extends React.Component {
	static propTypes = {
	    selectedLocation: PropTypes.string,
	    locationsList: PropTypes.array.isRequired,
	    center: PropTypes.object.isRequired,
	    zoom: PropTypes.number.isRequired
  	}

	render(){
		return (
			<div style={height:`500px`}>
				<h2>Google Map Container</h2>
				<GoogleMap
                    ref={map => this.map = map}
                    defaultZoom={10}
                    defaultCenter={{ lat: -34.397, lng: 150.644 }}
                    containerElement={
			          <div style={{ height: `100%` }} />
			        }
			        mapElement={
			          <div style={{ height: `100%` }} />
			        }
                    options={{
                        styles: [
                            {
                                featureType: 'poi',
                                elementType: 'all',
                                stylers: [{
                                    visibility: 'off'
                                }]
                            },
                            {
                                featureType: 'transit',
                                elementType: 'all',
                                stylers: [{
                                    visibility: 'off'
                                }]
                            }
                        ]
                    }}
                >
                </GoogleMap>
			</div>
		)
	}
}


const mapStateToProps = createStructuredSelector({
  locationsList: createSelector(
    (state) => state.locations.locationsList,
    (state) => state //DON'T KNOW!!!
  ),
  selectedLocation: createSelector(
    (state) => state.locations.selectedLocation,
    (state) => state //DON'T KNOW!!!
  ),

})

export default connect(mapStateToProps)(GoogleMapContainer);