import { SUM, START } from "./reducers";

export function startCounter(ammount) {
  const result = {
    type: START,
    payload: ammount
  };
  return result;
}
export function updateCounter(operation = SUM, ammount = 1) {
  return {
    type: operation,
    payload: ammount
  };
}
