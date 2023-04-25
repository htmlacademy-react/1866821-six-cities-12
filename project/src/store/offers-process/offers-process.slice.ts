import { createSlice } from '@reduxjs/toolkit';
import { FavoritesChange, FetchStatus, NameSpace } from '../../const';
import { fetchOneOfferAction,
  fetchOffersAction,
  fetchOffersNearByAction,
  addFavoriteOfferAction,
  removeFavoriteOfferAction
} from '../api-actions';
import { Offer, Offers } from 'types/offer';
import { changeIsFavoriteFields, offerInOffers, removeOfferFromOffers } from '../../utils/offers';

export type OffersProcess = {
  offers: Offers;
  offersLoadStatus: FetchStatus;
  offer: Offer | null;
  offerLoadStatus: FetchStatus;
}

const initialState: OffersProcess = {
  offers: [],
  offersLoadStatus: FetchStatus.Idle,
  offer: null,
  offerLoadStatus: FetchStatus.Idle,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOneOfferAction.pending, (state) => {
        state.offerLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOneOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.offerLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOneOfferAction.rejected, (state) => {
        state.offerLoadStatus = FetchStatus.Failed;
      })

      .addCase(fetchOffersAction.pending, (state) => {
        state.offersLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.offers = [];
        state.offersLoadStatus = FetchStatus.Failed;
      })

      .addCase(fetchOffersNearByAction.pending, (state) => {
        state.offersLoadStatus = FetchStatus.Loading;
      })
      .addCase(fetchOffersNearByAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.offersLoadStatus = FetchStatus.Success;
      })
      .addCase(fetchOffersNearByAction.rejected, (state) => {
        state.offers = [];
        state.offersLoadStatus = FetchStatus.Failed;
      })


      .addCase(addFavoriteOfferAction.fulfilled, (state, action) => {
        if (action.payload.offer.isFavorite && !offerInOffers(action.payload.favoriteOffers, action.payload.offer)) {
          const favoriteOffers = [...action.payload.favoriteOffers, action.payload.offer];
          const changedOffers = changeIsFavoriteFields(action.payload.offers, favoriteOffers, FavoritesChange.Add);
          state.offers = changedOffers;
          if (state.offer && !offerInOffers(action.payload.offers, action.payload.offer)) {
            state.offer.isFavorite = true;
          }
        }
      })


      .addCase(removeFavoriteOfferAction.fulfilled, (state, action) => {
        if (!action.payload.offer.isFavorite && offerInOffers(action.payload.favoriteOffers, action.payload.offer)) {
          const favoriteOffers = removeOfferFromOffers(action.payload.favoriteOffers, action.payload.offer);
          state.offers = changeIsFavoriteFields(action.payload.offers, favoriteOffers, FavoritesChange.Remove);
          if (state.offer && !offerInOffers(action.payload.offers, action.payload.offer)) {
            state.offer.isFavorite = false;
          }
        }
      });
  }
});
