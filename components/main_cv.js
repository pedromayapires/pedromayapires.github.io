import LeftSection from './left_section.js';
import RightSection from './right_section.js';
// import Context from '../utils/store.js';
import { Context } from '../utils/store.js';
// import React, {useEffect, useContext} from 'react';
// console.log(Store);
// let bla = useContext();

const e = React.createElement;

const MainCV = (props) => {
  const { useEffect, useContext } = React;
  const [ state, dispatch ] = useContext(Context);
  // {state.count}
  // <button onClick={() => dispatch({type: "increment", message:"Incremented"})}>+</button>
  console.log(state);
  dispatch({ key: 'bla', value: 'blaValue' });
  console.log(state);
  // const { state, dispatch } = useContext(Context);
  // const { state, dispatch } = useStore();
  return e(
    'div',
    { id: 'mainContainer' },
    e('div', { id: 'leftContainer' }, e(LeftSection, { ...props.jsonData })),
    e('div', { id: 'rightContainer' }, e(RightSection, { ...props.jsonData }))
  );
};

export default MainCV;
