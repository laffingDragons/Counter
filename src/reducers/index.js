import { combineReducers } from "redux";
import changeCounter from "./upDown";

const rootReducers = combineReducers({
    changeCounter
});

export default rootReducers