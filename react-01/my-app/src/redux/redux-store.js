import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  dialogsPage: dialogsPageReducer
});

let store = configureStore({ reducer: reducers });

window.store = store;

export default store;