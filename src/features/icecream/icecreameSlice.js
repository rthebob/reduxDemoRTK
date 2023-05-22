
import { createSlice } from '@reduxjs/toolkit' // 1] IMPORTOVAT createSlice
import { ordered as cakeOrdered } from '../cake/cakeSlice'
// STATE 4] 
const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({     // 2] Priradim createSlice do konstanty 
    name: 'icecream',      // 3] Jmeno
    initialState, // 5]
    reducers: {  // Define reducers mapping
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
   // extraReducers: {
   //     ['cake/ordered']: (state) => {
   //         state.numOfIcecreams--
   //     }
   // }
   extraReducers: (builder) => {
    builder.addCase(cakeOrdered, state => {
        state.numOfIcecreams--
    })
   }
})


// 6] Exports
export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions