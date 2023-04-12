import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import cn from 'classnames';
import { City } from '../../types/city';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import useMapMarkers from '../../hooks/use-map-markers';
import { Offers } from 'types/offer';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  selectedOfferId: number | undefined;
  isWide?: boolean;
}

export default function Map({className, city, offers, selectedOfferId, isWide}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMapMarkers({map, offers, selectedOfferId});

  useEffect(() => {
    map?.panTo({
      lat: city.location.latitude,
      lng: city.location.longitude
    });
  }, [city, map]);

  return (
    <section
      className={cn('map', className, isWide ? styles.citiesMapLimited : styles.citiesMapClean)}
      ref={mapRef}
    >
    </section>
  );
}
