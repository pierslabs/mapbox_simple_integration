import { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.styles.css';

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null); // Update the type of the map ref
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
      accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string,
    });
  });
  return (
    <div
      ref={mapContainer}
      className='map-container'
      style={{ width: '70%', height: '400px' }}
    />
  );
};

export default Map;
