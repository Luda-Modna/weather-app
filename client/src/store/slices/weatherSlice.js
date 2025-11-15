import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../api/weatherApi';

const WEATHER_SLICE_NAME = 'weather';

const initialState = {
  weather: null,
  loading: false,
  error: null,
};

export const getWeatherThunk = createAsyncThunk(
  `${WEATHER_SLICE_NAME}/getWeather`,
  async (city, { rejectWithValue }) => {
    try {
      const data = await API.getWeather(city);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || 'Failed to fetch weather'
      );
    }
  }
);

const weatherSlice = createSlice({
  name: WEATHER_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWeatherThunk.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWeatherThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.weather = payload;
      })
      .addCase(getWeatherThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.weather = null;
        state.error = payload;
      });
  },
});

const { reducer } = weatherSlice;

export default reducer;
