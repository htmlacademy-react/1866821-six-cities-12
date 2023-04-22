import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Cities, NameSpace, SortKinds } from '../../const';
import { SortType } from '../../types/sort';
import { City } from 'types/city';


type Aside = {
  city: City;
  sort: string;
  hotelId: number | null;
}

const initialState: Aside = {
  city: Cities.Paris,
  sort: SortKinds.POPULAR,
  hotelId: null,
};

export const asideProcess = createSlice({
  name: NameSpace.Aside,
  initialState,
  reducers: {
    changeSort: (state, action: PayloadAction<keyof SortType>) => {
      state.sort = SortKinds[action.payload];
    },
    changeCity: (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    },
    changeHotelId: (state, action: PayloadAction<number>) => {
      state.hotelId = action.payload;
    }
  }
});

export const { changeSort, changeCity, changeHotelId } = asideProcess.actions;
