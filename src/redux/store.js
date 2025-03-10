import { createStore } from "redux";
import {counterReducer} from "./reducer"
 
export const store = createStore(counterReducer);
// console.log(store.getState());
export default store;


