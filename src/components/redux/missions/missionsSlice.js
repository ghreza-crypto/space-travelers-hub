import { createSlice } from '@reduxjs/toolkit';
import getMissions from './getMissions';

const initialState = {
  missions: [],
  isLoading: false,
  errorMessage: '',
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMissions: (state, action) => {
      const getId = action.payload;
      const missionId = state.missions.findIndex(
        (mission) => mission.mission_id === getId,
      );

      if (missionId != null) {
        const updateMissions = { ...state.missions[missionId], reserve: true };
        state.missions[missionId] = updateMissions;
      }
    },
    leaveMissions: (state, action) => {
      const getId = action.payload;
      const missionId = state.missions.findIndex(
        (mission) => mission.mission_id === getId,
      );

      if (missionId != null) {
        const updateMissions = {
          ...state.missions[missionId],
          reserve: false,
        };
        state.missions[missionId] = updateMissions;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(getMissions.fulfilled, (state, action) => {
        state.isLoading = true;
        state.missions = action.payload;
      })

      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = true;
        state.missions = action.payload;
      });
  },
});

export default missionsSlice;
