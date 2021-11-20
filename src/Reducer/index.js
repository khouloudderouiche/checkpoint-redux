import{combineReducers} from "redux";
import { counterReducer } from "./CounterReducer";
export const rootReducer = combineReducers({counterReducer});