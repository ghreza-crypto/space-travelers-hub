import { createSlice } from '@reduxjs/toolkit';
import getMissions from './getMissions';

const initialState = {
  missions: [],
  isLoading: false,
  errorMessage: '',
};

// const id = action.payload;
// const newState = state.rockets.map((rocket) =>
//   rocket.rocket_id === id ? { ...rocket, reserved: true } : rocket
// );
// return { ...state, rockets: newState };

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
        const updateMissions = { ...state.missions[missionId], reserved: true };
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
          reserved: false,
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
        const missions = action.payload.map((item) => ({
          ...item,
          reserved: false,
        }));
        state.isLoading = true;
        state.missions = missions;
      })

      .addCase(getMissions.rejected, (state, action) => {
        state.isLoading = true;
        state.missions = action.payload;
      });
  },
});

export const { joinMissions, leaveMissions } = missionsSlice.actions;
export default missionsSlice.reducer;
