import { createSlice } from "@reduxjs/toolkit"


const initialState = { 
    loaded: false,
    darkTheme: false,
    resistorIndex: 0,
}

const homepageSlice = createSlice({
    name: 'homepage',
    initialState,
    reducers: {
        setLoaded: (state, action) => {
            state.loaded = action.payload
        },
        toggleDarkTheme: (state, action) => {
            state.darkTheme = !state.darkTheme
        },
        setResistorIndex: (state, action) => {
            state.resistorIndex = action.payload
        }
    }
})

export const {
    setLoaded,
    toggleDarkTheme,
    setResistorIndex
} = homepageSlice.actions

export default homepageSlice.reducer