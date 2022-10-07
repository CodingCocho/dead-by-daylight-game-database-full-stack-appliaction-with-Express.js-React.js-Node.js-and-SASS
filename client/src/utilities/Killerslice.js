import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    killers: [],
    fetched: false
}


const killersSlice = createSlice(
    {
        name: 'killers',
        initialState,
        reducers: {
            addKillers(state, action)
            {
                state.killers = action.payload;
                state.fetched = true;
            }
        }
    }
)

export const {addKillers} = killersSlice.actions;

export default killersSlice.reducer;