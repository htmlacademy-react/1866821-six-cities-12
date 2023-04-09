import { Map, Icon, Marker} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const';
import {useEffect } from 'react';
import { Offers } from 'types/offer';
import { City } from 'types/city';
import leaflet from 'leaflet';

type UseMapMarkers = {
  map: Map | null;
  offers: Offers;
  selectedOfferId: number | undefined;
  city: City;
}

const useMapMarkers = ({map, offers, selectedOfferId, city}: UseMapMarkers) => {
  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39]
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [27, 39]
  });


  useEffect(() => {
    if (map && offers) {
      const layerMarkers: Marker[] = [];

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOfferId !== undefined && offer.id === selectedOfferId
              ? currentCustomIcon
              : defaultCustomIcon
          );

        layerMarkers.push(marker);
      });

      const layerGroup = leaflet.layerGroup(layerMarkers);
      layerGroup.addTo(map);
    }
  }, [map, offers, selectedOfferId]);

};

export default useMapMarkers;
