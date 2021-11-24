import {
  withScriptjs,
  GoogleMap,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import React from "react";

const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: Number(props.lat), lng: Number(props.lon) }}
      // defaultCenter={{ lat: 43.71499275, lng: 150.644 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: Number(props.lat), lng: Number(props.lon) }} />
      )}
    </GoogleMap>
  ))
);

export default MyMapComponent;
