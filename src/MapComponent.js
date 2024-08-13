import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = ({ lat, lon }) => {
  const [markers, setMarkers] = useState({ latitude: 0, longitude: 0});
  const [zom,set_zom]=useState(-1);
  const [ini,set_ini]=useState(6000)
  const mapRef = useRef();
 


  useEffect(() => {
    const inter = setInterval(() => {
      set_ini(300);
      if (zom === 15) {
        return ()=>{
          clearInterval(inter)
        }
      }else{
      const inte = setTimeout(() => {
        set_zom(zom+1)
        if (zom === 15) {
          return ()=>{
            clearTimeout(inte)
          }
        }
        
      }, 200);
    }
    }, ini);

    return () => {
      clearInterval(inter);
    };
  }, [zom]);
useEffect(()=>{
  set_zom(-1)
  set_ini(6000)
  
},[lat])

  
  useEffect(() => {
    setMarkers({ latitude: lat, longitude: lon });
    
    if (mapRef.current) {
      mapRef.current.setView([lat, lon],zom);
    } 
   
  }, [lat, lon,zom]);

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
    
    <MapContainer center={[lat, lon]} zoom={0} ref={mapRef} >
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
