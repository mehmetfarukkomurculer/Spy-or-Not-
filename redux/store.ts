import { configureStore} from "@reduxjs/toolkit";
import playerNumbersSlice from "./slices/player-numbers-slice";
import indicatorSlice from "./slices/indicator-slice";
import languageSlice from "./slices/language-slice";
const store = configureStore({
  reducer: {
    playerNumbers: playerNumbersSlice.reducer,
    indicator: indicatorSlice.reducer,
    language: languageSlice.reducer,
  },
});


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;