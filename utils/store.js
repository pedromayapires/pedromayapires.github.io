// import React, { createContext, useReducer } from 'react';
import Reducer from './reducer.js';
import DATA from '../cv_db.js';

// const { useState } = React;
// const [state, setState] = useState(initialState);

const { createContext, useReducer } = React;
const e = React.createElement;

const initialState = {
  _originalData: DATA
};

export const Store = ({ children }) => {
  const [ state, dispatch ] = useReducer(Reducer, initialState);
  //   return e('Context.Provider', { value: [ state, dispatch ] }, { children });
  //   return children;
  return e(Context.Provider, { value: [ state, dispatch ] }, children);
};

// export const Context = createContext(initialState);
export const Context = createContext(initialState);
export default Store;
