import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const initialState = {
  rockets: [],
  isLoading: false,
  errorMessage: '',
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', () => axios.get(baseUrl).then((response) => response.data));

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => (rocket.rocket_id === id
        ? { ...rocket, reserved: true } : rocket));
      return { ...state, rockets: newState };
    },
    cancelReservation: (state, action) => {
      const id = action.payload;
      const newState = state.rockets.map((rocket) => (rocket.rocket_id === id
        ? { ...rocket, reserved: false } : rocket));
      return { ...state, rockets: newState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        const rockets = action.payload.map((item) => (
          {
            ...item,
            reserved: false,
          }
        ));
        state.isLoading = false;
        state.rockets = rockets;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.error.message;
      });
  },
});
export const { reserve, cancelReservation } = rocketsSlice.actions;
export default rocketsSlice.reducer;
