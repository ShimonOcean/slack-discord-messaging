import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: null,
};


export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // On action, change state roomId to action roomId
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

// Use enterRoom outside of appSlice
export const { enterRoom } = appSlice.actions;

// Access roomId from Redux Global Store
export const selectRoomId = (state) => state.app.roomId;


export default appSlice.reducer;
