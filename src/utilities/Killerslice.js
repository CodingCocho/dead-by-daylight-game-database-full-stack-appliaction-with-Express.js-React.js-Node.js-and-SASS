// import { createSlice.createAsyncThunk } from '@reduxjs/toolkit'
// import { fetchKillers } from '../api/Deadbydaylight'
// import axios from "axios"

// const initialState ={
//     killers: []
// }

// export const fetchKillers = createAsyncThunk('killers/fetchKillers', async () => {
//     try
//     {
//         const response = await axios.get('https://thingproxy.freeboard.io/fetch/https://dead-by-api.herokuapp.com/api/killers');
//         return [...response.data.data]
//     }
//     catch(err)
//     {
//         return err.message
//     }
// })

// const killersSlice = createSlice(
//     {
//         name: 'killers',
//         initialState,
//         reducers: {},
//         extraReducers(builder){
//             builder
//                 .addCase(fetchKillers.pending, (state, action) => {
//                     state.status = 'loading';
//                 })
//                 .addCase(fetchKillers.fulfilled, (state, action) =>
//                 {
//                     state.status = 'succeeded';
//                     state.killers = action.payload;
//                 })
//                 .addCase(fetchKillers.rejected, (state, action) => 
//                 {
//                     state.status ='failed';
//                     state.error = action.error.message
//                 })
//         }
//     }
// )

// export default killersSlice.reducer;