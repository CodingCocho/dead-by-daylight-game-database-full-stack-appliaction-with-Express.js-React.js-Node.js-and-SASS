import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    survivors: [],
    perks: []
}


const survivorsSlice = createSlice(
    {
        name: 'survivors',
        initialState,
        reducers: {
            addSurvivors(state, action)
            {
                state.survivors = action.payload;
            },
            addSurvivorPerks(state, action)
            {
                state.perks = action.payload;
            }
        }
    }
)

export const {addSurvivors, addSurvivorPerks} = survivorsSlice.actions;

export default survivorsSlice.reducer;