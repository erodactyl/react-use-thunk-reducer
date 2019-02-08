# useThunkReducer

To install run

```
npm i react-use-thunk-reducer
```
or
```
yarn add react-use-thunk-reducer
```

# Usage

```js
import React from "react";
import useAsyncReducer from "./useAsyncReducer";

const reducer = (state, action) => {
  if (action.type === "HI") {
    return action.value;
  } else {
    return state;
  }
};

const changeValueAsync = () => ({ dispatch, getState }) => {
  setTimeout(() => {
    dispatch({ type: "HI", value: Math.random() });
  }, 1000);
};

const App = () => {
  const [state, thunk] = useAsyncReducer(reducer, "INITIAL");
  return <button onClick={() => thunk(changeValueAsync())}>{state}</button>;
};

export default App;

```
