import { useReducer, useRef } from 'react';

const useAsyncReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(null);
  stateRef.current = state;
  const getState = () => stateRef.current;
  const thunk = actionCreator => {
    if (typeof actionCreator === 'function') {
      return actionCreator({ dispatch, getState });
    }
    return dispatch(actionCreator);
  };
  return [state, thunk];
};

export default useAsyncReducer;
