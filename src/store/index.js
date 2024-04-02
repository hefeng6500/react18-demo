import { configureStore } from "@reduxjs/toolkit"

const reducer = (state = { value: 0 }, { type }) => {
  switch (type) {
    case "incremented":
      return { value: state.value + 1 }

    case "decremented":
      return { value: state.value - 1 }

    default:
      return state
  }
}

const store = configureStore({
  reducer: {
    
  }
})

store.subscribe(() => {
  console.log(store.getState().value)
})

export default store