import React from 'react';
import pure from 'recompose/pure';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
// import { Button, Col, DropdownButton, Grid, Input, MenuItem, OverlayTrigger, Popover, Row, Table } from 'react-bootstrap';

const GoogleMapComp = withGoogleMap((props) => (
  <GoogleMap
    defaultZoom={props.defaultZoom}
    defaultCenter={props.defaultCenter}
  />
));

export default pure(GoogleMapComp)