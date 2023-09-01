import { legacy_createStore } from "redux";
import { Reducer } from "./Reducer";

export let Store = legacy_createStore(Reducer,
    window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION())