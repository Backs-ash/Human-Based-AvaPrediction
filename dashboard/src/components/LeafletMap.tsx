import React from 'react';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const LeafletMap: React.FC = () => {
  return (
    <div className="w-1/10 h-1/10">
      <MapContainer center={[35.4639, 77.0439]} zoom={13} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[35.4639, 77.0439]}>
          <Popup>
            A sample popup with some information.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;