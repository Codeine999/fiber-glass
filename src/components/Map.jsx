"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});


const Map = () => {
  const position = [13.846450, 100.414879]; // ตัวอย่าง: กรุงเทพฯ

  return (
    <div className="z-1">
    <div className="mt-32 mb-10 text-center">
      <p className="text-[18px]">แผนที่จาก Google Map</p>
    </div>
    <MapContainer center={position} zoom={15} style={{ height: "280px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>ร้านของเรา</Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default Map
