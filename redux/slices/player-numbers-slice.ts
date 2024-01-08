import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface playerNumberState {
    playerNumber: number;
    spyNumber: number;
}

const initialState: playerNumberState = {
    playerNumber: 0,
    spyNumber: 0,
}

const playerNumbersSlice = createSlice({
    name: 'player-numbers',
    initialState,
    reducers: {
        setPlayerNumber(state, action: PayloadAction<number>){
            state.playerNumber = action.payload;
        },
        setSpyNumber(state, action: PayloadAction<number>){
            state.spyNumber = action.payload;
        }
    }
})

export const { setPlayerNumber, setSpyNumber} = playerNumbersSlice.actions;
export default playerNumbersSlice;