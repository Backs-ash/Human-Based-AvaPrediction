// MainBody component
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MainBody = () => {
  const mapStyle = {
    height: '10%', // Adjust the height as needed
    width: '100%',   // Set to 100% to fill the container width
  };

  return (
    <div className="map-container" style={mapStyle}> {/* You can add a specific class for styling if needed */}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MainBody;
