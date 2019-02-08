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
import useThunkReducer from "react-use-thunk-reducer";

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
  const [state, thunk] = useThunkReducer(reducer, "INITIAL");
  return <button onClick={() => thunk(changeValueAsync())}>{state}</button>;
};

export default App;

```
