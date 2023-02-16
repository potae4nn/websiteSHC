import React, { memo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

type Props = {};

export default function Googlemap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });
  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
function Map() {
  return (
    <GoogleMap
      zoom={16}
      center={{ lat: 14.885739, lng: 102.018302 }}
      mapContainerClassName=""
      mapContainerStyle={{ width:"40vh", height: "30vh" }}
    >
      <Marker position={{ lat: 14.885739, lng: 102.018302 }}></Marker>
    </GoogleMap>
  );
}
