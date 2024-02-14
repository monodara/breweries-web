import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { MapPosition } from "../../misc/type";

const containerStyle = {
  width: "600px",
  height: "400px",
};

function MapComponent({ lat, lng }: MapPosition) {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey ?? "Default Key",
  });
  const center = {
    lat: lat,
    lng: lng,
  };
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  const onLoad = React.useCallback(function callback(
    map: google.maps.Map | null
  ) {
    if (map) {
      map.setZoom(11);
    }

    setMap(map);
  },
  []);
  const onUnmount = React.useCallback(function callback(
    map: google.maps.Map | null
  ) {
    setMap(null);
  },
  []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Marker position={center}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MapComponent);
