import { combineReducers , createStore } from "redux";
import {GheReducer} from "./datVeXemPhim/reducer"

const rootReducer = combineReducers({
    
    GheReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);