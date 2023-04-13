import { Map, Icon, Marker, LayerGroup} from 'leaflet';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../const';
import {useEffect } from 'react';
import { Offers } from 'types/offer';

type UseMapMarkers = {
  map: Map | null;
  offers: Offers;
  selectedOfferId: number | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39]
});

const useMapMarkers = ({map, offers, selectedOfferId}: UseMapMarkers) => {
  useEffect(() => {
    if (map && offers) {
      const layerGroup = new LayerGroup();

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
          ).addTo(layerGroup);

      });

      layerGroup.addTo(map);

      return () => {
        map.removeLayer(layerGroup);
      };
    }
  }, [map, offers, selectedOfferId]);

};

export default useMapMarkers;
