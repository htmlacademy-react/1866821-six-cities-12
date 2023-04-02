import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import cn from 'classnames';
import { City } from '../../types/city';
import { useRef } from 'react';
import useMap from '../../hooks/use-map';
import useMapMarkers from '../../hooks/use-map-markers';
import { Offers } from 'types/offer';

type MapProps = {
  className: string;
  city: City;
  offers: Offers;
  selectedOfferId: number | undefined;
}

export default function Map({className, city, offers, selectedOfferId}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMapMarkers({map, offers, selectedOfferId});

  return (
    <section
      className={cn('map', className, styles.citiesMapClean)}
      ref={mapRef}
    >
    </section>
  );
}
