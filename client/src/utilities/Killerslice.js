import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    killers: [],
    perks: []
}


const killersSlice = createSlice(
    {
        name: 'killers',
        initialState,
        reducers: {
            addKillers(state, action)
            {
                state.killers = action.payload;
            },
            addKillerPerks(state, action)
            {
                state.perks = action.payload;
            }
        }
    }
)

export const {addKillers, addKillerPerks} = killersSlice.actions;

export default killersSlice.reducer;