import { configureStore} from "@reduxjs/toolkit";
import playerNumbersSlice from "./slices/player-numbers-slice";

const store = configureStore({
  reducer: {
    playerNumbers: playerNumbersSlice.reducer,
  },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;