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

export default rocketsSlice.reducer;
