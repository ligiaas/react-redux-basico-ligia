// forma padrão do mercado:
export const START = "start";
export const SUM = "sum";
export const SUBTRACT = "subtract";

function rootReducer(state, action) {
  console.log(action);
  switch (action.type) {
    case START:
      return {
        ...state,
        counter: action.payload
      };
    case SUM:
      console.log(action);
      return {
        ...state,
        counter: state.counter + action.payload
      };

    case SUBTRACT:
      return {
        ...state,
        counter: Math.max(0, state.counter - action.payload)
      };
    default:
      return state;
  }
}

export default rootReducer;
