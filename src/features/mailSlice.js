import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
  },

  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },

    closeSendMessage: (state, action) => {
      state.sendMessageIsOpen += false;
    },
  },
});

export const { increment, decrement, incrementByAmount } = mailSlice.actions;

export const selectSendMesageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
