const Reducer = (state, action) => {
  state[action.key] = action.value;
  return state;
};

export default Reducer;
