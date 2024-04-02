import { createStore } from 'redux'

const store = createStore(reducer)

function reducer(state = { value: 0 }, action) {
  switch (action.type) {
    case "incremented":
      return { value: state.value + 1 }

    case "decremented":
      return { value: state.value - 1 }

    default:
      return state
  }
}

store.subscribe(() => {
  console.log("接受到 stata 变化：", store.getState().value);
})

export default store