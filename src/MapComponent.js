import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = ({ lat, lon }) => {
  const [markers, setMarkers] = useState({ latitude: 0, longitude: 0 });
  const mapRef = useRef();

  useEffect(() => {
    setMarkers({ latitude: lat, longitude: lon });
    if (mapRef.current) {
      mapRef.current.setView([lat, lon], 17);
    }
  }, [lat, lon]);

  const defaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });

  L.Marker.prototype.options.icon = defaultIcon;

  return (
    <MapContainer center={[lat, lon]} zoom={15} ref={mapRef}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      />
      <Marker key={`${markers.latitude}-${markers.longitude}`} position={[markers.latitude, markers.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
