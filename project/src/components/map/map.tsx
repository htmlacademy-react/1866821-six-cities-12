import 'leaflet/dist/leaflet.css';
import styles from './map.module.css';
import cn from 'classnames';
import { City } from '../../types/city';
import { Point, Points } from 'types/point';
import { useRef } from 'react';
import useMap from '../../hooks/useMap';
import useMapMarkers from '../../hooks/useMapMarkers';

type MapProps = {
  className: string;
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
}

export default function Map({className, city, points, selectedPoint}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useMapMarkers(map, points, selectedPoint);

  return (
    <section
      className={cn('map', className, styles.citiesMapClean)}
      ref={mapRef}
    >
    </section>
  );
}
