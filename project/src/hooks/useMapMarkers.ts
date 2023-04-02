import leaflet from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const';
import {Icon, Marker} from 'leaflet';
import {useEffect } from 'react';
import { Point, Points } from 'types/point';

const useMapMarkers = (map: leaflet.Map | null, points: Points, selectedPoint: Point | undefined) => {
  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.latitude,
          lng: point.longitude
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);
};

export default useMapMarkers;


