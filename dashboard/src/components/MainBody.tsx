import { render } from '@testing-library/react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
const position = [35.4639, 77.0439]

export default function MainBody() {
return(
    <div>
    render(
        <MapContainer zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      )
    </div>
)
}