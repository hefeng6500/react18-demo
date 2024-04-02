import { createSlice, configureStore } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

store.subscribe(() => {
  console.log(store.getState().value)
})

export const { incremented, decremented } = counterSlice.actions

export default store