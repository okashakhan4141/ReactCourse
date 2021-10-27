import { createStore } from "redux";

const counterDefault = { counter: 0 };
const counterReducer = (state = counterDefault, action) => {
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  } else if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const counterStore = createStore(counterReducer);

export default counterStore;
