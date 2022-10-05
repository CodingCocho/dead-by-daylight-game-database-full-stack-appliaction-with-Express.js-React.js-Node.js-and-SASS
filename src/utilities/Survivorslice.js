import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    survivors: [],
    fetched: false
}


const survivorsSlice = createSlice(
    {
        name: 'survivors',
        initialState,
        reducers: {
            addSurvivors(state, action)
            {
                state.survivors = action.payload;
                state.fetched = true;
            }
        }
    }
)

export const {addSurvivors} = survivorsSlice.actions;

export default survivorsSlice.reducer;