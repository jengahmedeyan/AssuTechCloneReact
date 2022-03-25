import React from "react";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  height: "700px",
  overflow: "hidden",
  position: "relative",
};

const center = {
  lat: 13.39424,
  lng: -16.755113,
};
function Map() {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyAp3mUQtomA2xgTddWM9AWAMaIuy-ChKec">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Map;
