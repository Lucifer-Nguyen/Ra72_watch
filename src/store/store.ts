import { legacy_createStore } from "redux";
import { rootReducer } from ".";

export const store = legacy_createStore(rootReducer);
