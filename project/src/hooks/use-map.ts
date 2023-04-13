import {useEffect, useState, useRef} from 'react';
import leaflet from 'leaflet';
import { City } from 'types/city';

const LF_LAYER_SOURCE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const LF_LAYER_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const useMap = (mapRef: React.MutableRefObject<HTMLElement | null>, city: City) => {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);


  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef?.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom
      });

      leaflet
        .tileLayer(
          LF_LAYER_SOURCE,
          {
            attribution: LF_LAYER_ATTRIBUTION
          }
        )
        .addTo(instance);
      setMap(instance);
      isRenderedRef.current = true;
    }

  }, [mapRef, city]);

  return map;
};

export default useMap;
