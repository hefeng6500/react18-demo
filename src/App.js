import React, { useState, useEffect } from 'react';
import store, { incremented, decremented } from "./store/index"

function App() {

  const [value, setValue] = useState(store.getState().value);

  const handlerClickIncrement = () => {
    store.dispatch(incremented())
  }

  const handlerClickDecrement = () => {
    store.dispatch(decremented())
  }

  useEffect(() => {
    // 订阅 Redux store 的变化
    const unsubscribe = store.subscribe(() => {
      // 当 Redux store 的状态发生变化时，更新组件的状态
      setValue(store.getState().value);
    });

    // 组件卸载时取消订阅
    return () => {
      unsubscribe()
    };
  }, []); // 这里传入一个空数组表示只在组件挂载时订阅和取消订阅，不依赖任何 props 或 state 的变化


  return (
    <div >
      <h1>
        {value}
      </h1>

      <button onClick={handlerClickDecrement}>减少</button>
      <button onClick={handlerClickIncrement}>增加</button>
    </div>
  );
}

export default App;
